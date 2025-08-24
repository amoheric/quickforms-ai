
# 🗃️ QuickForms AI – Database Schema (Prisma)

**Course**: CSC 318 – Software Engineering Principles  
**Assignment**: Final Project – QuickForms AI  
**Student**: Eric Amoh Adjei  
**Instructor**: Professor Rawad Habib  
**Date**: August 2025  

---

## 📌 Overview

The QuickForms AI backend is built on Prisma ORM. The database schema is designed for clean relational management of forms and their responses. It supports both **SQLite** for development and **Postgres** for production deployments.

---

## 📊 Entity-Relationship Summary

- `Form` – The core table that stores form metadata (title, description).
- `Field` – Stores individual form fields (type, label) related to a form.
- `Response` – Captures user submissions as structured JSON linked to a form.

---

## 🔠 Full Prisma Schema

```prisma
model Form {
  id          String   @id @default(cuid())
  title       String
  description String?
  fields      Field[]
  responses   Response[]
}

model Field {
  id      String @id @default(cuid())
  type    String
  label   String
  formId  String
  form    Form   @relation(fields: [formId], references: [id])
}

model Response {
  id      String   @id @default(cuid())
  formId  String
  form    Form     @relation(fields: [formId], references: [id])
  data    Json
}
```

---

## 🔗 Relationships

- A `Form` can have multiple `Field` entries.
- A `Form` can have multiple `Response` entries.
- Each `Field` and `Response` is linked to exactly one `Form`.

---

## 💡 Notes

- The schema uses `cuid()` for globally unique IDs.
- JSON data type allows flexible response structures in the `Response` model.
- Easily extendable for future enhancements like `User`, `Tags`, `ValidationRules`, etc.

---

## 🔮 Future Enhancements

| Field / Model     | Description                                |
|-------------------|--------------------------------------------|
| `User`            | Add support for authentication & ownership |
| `Tags`            | Categorize forms or responses              |
| `ValidationRules` | Store custom validation per field          |
| `SubmissionDate`  | Add timestamp to `Response`                |

---

## 🧪 Migration Setup

To apply this schema, run:

```bash
pnpm prisma migrate dev --name init
```

For production with Postgres, update `.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/quickforms"
```

---

## ✅ Conclusion

This schema supports QuickForms AI's core requirements — form creation, response storage, and data export — with flexibility for future scaling.

