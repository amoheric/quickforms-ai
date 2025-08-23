import 'dotenv/config'
import express, { type Request, type Response } from 'express'
import cors from 'cors'
import { z } from 'zod'

const app = express()
app.use(express.json())
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }))

type FieldType = 'TEXT' | 'NUMBER' | 'EMAIL' | 'DROPDOWN' | 'CHECKBOX'
interface Field { id: string; formId: string; label: string; type: FieldType; required: boolean; order: number; options?: string[] }
interface Form { id: string; title: string; description?: string; createdAt: string; fields: Field[] }
interface SubmissionValue { fieldId: string; value: string }
interface Submission { id: string; formId: string; createdAt: string; values: SubmissionValue[] }

const db = { forms: new Map<string, Form>(), submissions: new Map<string, Submission[]>() }

const fieldSchema = z.object({
  label: z.string().min(1),
  type: z.enum(['TEXT', 'NUMBER', 'EMAIL', 'DROPDOWN', 'CHECKBOX']),
  required: z.boolean().optional().default(false),
  order: z.number().int().nonnegative().optional().default(0),
  options: z.array(z.string()).optional(),
})
const formCreateSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  fields: z.array(fieldSchema).optional().default([]),
})
const submissionSchema = z.object({
  values: z.array(z.object({ fieldId: z.string(), value: z.string() })),
})

const cuid = () => 'c' + Math.random().toString(36).slice(2) + Date.now().toString(36)

/* Forms */
app.post('/api/forms', (req: Request, res: Response) => {
  const parsed = formCreateSchema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json(parsed.error)

  const id = cuid()
  const now = new Date().toISOString()
  const form: Form = { id, title: parsed.data.title, description: parsed.data.description, createdAt: now, fields: [] }

  parsed.data.fields.forEach((f, i) => {
    form.fields.push({
      id: cuid(),
      formId: id,
      label: f.label,
      type: f.type,
      required: !!f.required,
      order: f.order ?? i,
      options: f.options,
    })
  })

  db.forms.set(id, form)
  res.status(201).json(form)
})

app.get('/api/forms/:id', (req: Request, res: Response) => {
  const form = db.forms.get(req.params.id)
  if (!form) return res.status(404).json({ error: 'Not found' })
  res.json(form)
})

app.post('/api/forms/:id/fields', (req: Request, res: Response) => {
  const form = db.forms.get(req.params.id)
  if (!form) return res.status(404).json({ error: 'Form not found' })
  const parsed = fieldSchema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json(parsed.error)

  const field: Field = {
    id: cuid(),
    formId: form.id,
    label: parsed.data.label,
    type: parsed.data.type,
    required: !!parsed.data.required,
    order: parsed.data.order ?? form.fields.length,
    options: parsed.data.options,
  }
  form.fields.push(field)
  res.status(201).json(field)
})

/* Public metadata & submission */
app.get('/p/:id', (req: Request, res: Response) => {
  const form = db.forms.get(req.params.id)
  if (!form) return res.status(404).json({ error: 'Not found' })
  res.json({ id: form.id, title: form.title, description: form.description, fields: form.fields })
})

app.post('/p/:id/submit', (req: Request, res: Response) => {
  const form = db.forms.get(req.params.id)
  if (!form) return res.status(404).json({ error: 'Form not found' })
  const parsed = submissionSchema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json(parsed.error)

  for (const field of form.fields) {
    const item = parsed.data.values.find(v => v.fieldId === field.id)
    if (field.required && (!item || !item.value.trim())) {
      return res.status(400).json({ error: `Field '${field.label}' is required` })
    }
    if (field.type === 'EMAIL' && item && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(item.value)) {
      return res.status(400).json({ error: `Field '${field.label}' must be a valid email` })
    }
    if (field.type === 'NUMBER' && item && Number.isNaN(Number(item.value))) {
      return res.status(400).json({ error: `Field '${field.label}' must be a number` })
    }
  }

  const submission: Submission = {
    id: cuid(),
    formId: form.id,
    createdAt: new Date().toISOString(),
    values: parsed.data.values,
  }
  const list = db.submissions.get(form.id) ?? []
  list.push(submission)
  db.submissions.set(form.id, list)

  res.status(201).json({ submissionId: submission.id })
})

/* Submissions & CSV export */
app.get('/api/forms/:id/submissions', (req: Request, res: Response) => {
  const list = db.submissions.get(req.params.id) ?? []
  res.json(list)
})

app.get('/api/forms/:id/export', (req: Request, res: Response) => {
  const form = db.forms.get(req.params.id)
  if (!form) return res.status(404).json({ error: 'Form not found' })
  const list = db.submissions.get(form.id) ?? []

  const headers = ['submissionId', 'createdAt', ...form.fields.map(f => f.label)]
  const rows = list.map(sub => {
    const m = new Map(sub.values.map(v => [v.fieldId, v.value]))
    const vals = form.fields.map(f => JSON.stringify(m.get(f.id) ?? ''))
    return [sub.id, sub.createdAt, ...vals].join(',')
  })
  const csv = [headers.join(','), ...rows].join('\n')

  res.setHeader('Content-Type', 'text/csv; charset=utf-8')
  res.setHeader('Content-Disposition', 'attachment; filename="submissions.csv"')
  res.send(csv)
})

const port = Number(process.env.PORT) || 4000
app.listen(port, () => {
  console.log(`API http://localhost:${port}`)
})
