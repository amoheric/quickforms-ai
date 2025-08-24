
# 📘 Final Project Report – QuickForms AI

**Course**: CSC 318 – Software Engineering Principles  
**Assignment**: Final Project – QuickForms AI  
**Student**: Eric Amoh Adjei  
**Instructor**: Professor Rawad Habib  
**Date**: August 2025  

---

## 1. 📌 Introduction

**QuickForms AI** is a smart, AI-assisted form builder designed to help small businesses and individuals create professional forms using natural language prompts and drag-and-drop editing — no coding required.

This report documents the full software development lifecycle (SDLC), including system design, architecture, UML models, testing, and methodology.

---

## 2. 🎯 Project Overview

- **Problem**: Non-technical users often struggle with creating custom forms.
- **Users**: Small businesses, freelancers, educators, event planners.
- **Solution**: AI-driven form creation + customization + export support.

### ✅ Core Features
1. AI-powered prompt-to-form generation  
2. Drag-and-drop form editor  
3. HTML export and shareable links  
4. Response collection + CSV export

---

## 3. 🎯 Scope & Objectives

### ✅ What it does:
- Create forms from AI prompts
- Manual field editing with drag & drop
- Store responses in a database
- Export embeddable HTML

### 🚫 What it excludes:
- No full-scale analytics or reporting
- No payment processing
- No enterprise load balancing

---

## 4. 🔧 Development Methodology

QuickForms AI was built using **Agile** + **Unified Process (UP)**:

- **Agile**: Sprints, backlog, user stories, daily iteration
- **UP Phases**:
  - **Inception** – Identified business needs
  - **Elaboration** – Designed system architecture + UML
  - **Construction** – Full-stack development
  - **Transition** – Testing + documentation

This hybrid method ensured continuous feedback and quality control.

---

## 5. 🏗️ System Architecture

QuickForms AI uses a **Layered MVC Architecture**:

| Layer      | Technology                  | Description                      |
|------------|------------------------------|----------------------------------|
| Frontend   | React + Vite                 | Dynamic user interface           |
| Backend    | Express + Node.js            | REST API & OpenAI integration    |
| Database   | Prisma ORM + SQLite/Postgres | Schema + data persistence        |
| AI Layer   | OpenAI API                   | Converts prompts to field schema |

🔗 **Architecture Diagram**: ![Lucidchart MVC Diagram](https://lucid.app/lucidchart/d8e710bf-4389-41f4-a888-cc2ecd8e624f/edit?invitationId=inv_9112dfff-f1b4-4c81-b86f-ce0fc562cd2d)

---

## 6. 🧩 UML Models

| Diagram Type        | Description                                         | Link |
|---------------------|-----------------------------------------------------|------|
| Use Case Diagram     | Actor interactions (User, AI, DB)                  | ![Use Case Diagram – Shows how actors (users, AI service, database) interact with the system.](https://lucid.app/lucidchart/a958eb5a-2790-42cb-816e-fdb398adc52e/edit?invitationId=inv_0231e5f8-16bd-4074-8d77-3396ada87276) |
| Class Diagram        | Models: Form, Field, Response                      | ![Class Diagram – Represents system entities (Form, Field, Response, User) and their relationships.](https://lucid.app/lucidchart/55b5dab0-e8ed-4ffc-944c-bedf769bfb33/edit?invitationId=inv_edfc7d03-f8fb-49f1-903b-395032d01eaf) |
| Sequence Diagram     | Full flow: form creation → submission              | ![Sequence Diagram – Demonstrates the workflow of a form submission from frontend to backend.](https://lucid.app/lucidchart/9ebac5f8-2750-4c49-a818-a68a9c01148f/edit?invitationId=inv_a858d1aa-8893-44db-b14a-b05e9f610924) |
| Deployment Diagram   | Infrastructure layout (frontend, backend, DB)      | ![•	Deployment Diagram – Visualizes how QuickForms AI is deployed across client, server, and database environments.](https://lucid.app/lucidchart/1c700ff5-06c7-4310-b4ef-26c5ae98bbab/edit?invitationId=inv_aa12924c-587a-43bd-adfd-b25f6b2aed0f) |

---

## 7. 🗃️ Database Schema

The relational schema consists of `Form`, `Field`, and `Response` tables managed via Prisma.

🔗 ![Schema Diagram](https://lucid.app/lucidchart/bb13c9f2-ef7c-4fa7-b07a-97e29cee2578/edit?invitationId=inv_6d3aa4a2-01bd-46cd-8820-9fd786dff201)

---

## 8. 🧪 Testing Summary

Testing included unit, integration, and system-level validation:

| Test ID | Component       | Input                            | Expected Output              | Result |
|---------|------------------|----------------------------------|------------------------------|--------|
| T1      | AI Generator     | “Registration form with name”    | Valid schema w/ 2 fields     | ✅ Pass |
| T2      | API Endpoint     | GET `/forms`                     | JSON list of all forms       | ✅ Pass |
| T3      | Form Submission  | Empty email field                | Error message shown          | ✅ Pass |

📎 Refer to `/docs/reports/testing.pdf` for the full Testing Report.

---

## 9. 🔍 Code Review Summary

**Peer/self review** focused on structure, naming, and best practices.

### ✅ Strengths:
- Modular components & services
- Consistent naming and file structure
- Clean API responses

### 🛠️ Fixes Made:
- Enhanced error messages
- Input validation on frontend
- Normalized Prisma schema
- Applied Prettier + ESLint rules

**Lesson**: Early reviews and linting reduce refactoring debt.

---

## 10. ⚠️ Challenges & Lessons Learned

| Challenge                   | Solution                                    |
|----------------------------|---------------------------------------------|
| AI misinterpretation       | Added fallback defaults and validations     |
| Postgres migration errors  | Refactored schema constraints               |
| Git merge conflicts        | Standardized branch naming & commit format  |

✅ **Lesson**: Refactoring checkpoints avoid costly last-minute fixes.

---

## 11. 🧠 Results & Future Improvements

**MVP Success**: QuickForms AI is stable, usable, and demo-ready.

### 🔮 Future Plans:
- Analytics Dashboard (visual insights)
- User authentication & roles
- Full CI/CD + cloud deployment
- Integrations: Slack, Google Sheets, etc.

---

## 12. ✅ Conclusion

QuickForms AI proves that an AI-enhanced form builder can be built with full SDLC coverage, UML modeling, testing, and documentation. It showcases:
- Professional development skills
- Agile + UP methodology in practice
- Clean, maintainable code structure

The project is deployment-ready and ready for further scaling.

---

## 📎 Appendix A – UML Bundle
[UML Master View (Lucidchart)](https://lucid.app/lucidchart/489e72e7-0565-4b49-80b4-80ee0e3c059d)

---

## 📎 Appendix B – Prisma Schema

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
