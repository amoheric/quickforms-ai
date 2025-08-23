import { useState } from 'react'
import axios from 'axios'

type FieldType = 'TEXT' | 'NUMBER' | 'EMAIL' | 'DROPDOWN' | 'CHECKBOX'
type Field = { label: string; type: FieldType; required?: boolean; order?: number; options?: string[] }

export default function App() {
  const [title, setTitle] = useState('New Form')
  const [fields, setFields] = useState<Field[]>([
    { label: 'Name', type: 'TEXT', required: true, order: 0 },
    { label: 'Email', type: 'EMAIL', required: true, order: 1 },
  ])
  const [formId, setFormId] = useState<string | null>(null)

  const addField = () =>
    setFields(prev => [...prev, { label: 'New Field', type: 'TEXT', order: prev.length }])

  const saveForm = async () => {
    const res = await axios.post('/api/forms', { title, fields })
    setFormId(res.data.id)
    alert('Saved. Public path on API host: /p/' + res.data.id)
  }

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>QuickForms AI</h1>
      <h2>Builder</h2>

      <label>
        Title:
        <input value={title} onChange={e => setTitle(e.target.value)} />
      </label>

      <ul>
        {fields.map((f, i) => (
          <li key={i} style={{ marginTop: 8 }}>
            <input
              value={f.label}
              onChange={e => {
                const v = e.target.value
                setFields(prev => prev.map((p, idx) => (idx === i ? { ...p, label: v } : p)))
              }}
            />
            <select
              value={f.type}
              onChange={e => {
                const v = e.target.value as FieldType
                setFields(prev => prev.map((p, idx) => (idx === i ? { ...p, type: v } : p)))
              }}
            >
              <option>TEXT</option>
              <option>NUMBER</option>
              <option>EMAIL</option>
              <option>DROPDOWN</option>
              <option>CHECKBOX</option>
            </select>
            <label style={{ marginLeft: 8 }}>
              <input
                type="checkbox"
                checked={!!f.required}
                onChange={e => {
                  const v = e.target.checked
                  setFields(prev => prev.map((p, idx) => (idx === i ? { ...p, required: v } : p)))
                }}
              />
              required
            </label>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 8 }}>
        <button onClick={addField}>+ Add Field</button>
        <button onClick={saveForm} style={{ marginLeft: 8 }}>
          Save Form
        </button>
      </div>

      <h2 style={{ marginTop: 24 }}>Submissions</h2>
      {formId ? (
        <>
          <div>
            <a href={`/api/forms/${formId}/submissions`} target="_blank">
              View submissions (JSON)
            </a>
          </div>
          <div>
            <a href={`/api/forms/${formId}/export`} target="_blank">
              Export CSV
            </a>
          </div>
        </>
      ) : (
        <em>Save a form first</em>
      )}
    </div>
  )
}
