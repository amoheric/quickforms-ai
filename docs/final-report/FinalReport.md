
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

🔗 **Architecture Diagram**: ![Layered MVC Architecture](https://github.com/amoheric/quickforms-ai/blob/main/docs/diagrams/UML%20Diagram_%20MVC%20_%20Layered%20Architecture.png)

---

## 6. 🧩 UML Models

| Diagram Type        | Description                                         | Link |
|---------------------|-----------------------------------------------------|------|
| Use Case Diagram     | Actor interactions: Shows how actors (users, AI service, database) interact with the system                  | ![Use Case Diagram](https://github.com/amoheric/quickforms-ai/blob/main/docs/diagrams/UML%20Use%20Case%20Diagram%20for%20QuickForms%20AI%20(1).png) |
| Class Diagram        | Models: Represents system entities (Form, Field, Response, User) and their relationships.                      | ![Class Diagram](https://github.com/amoheric/quickforms-ai/blob/main/docs/diagrams/UML%20Class%20Diagram%20for%20QuickForms%20AI.png) |
| Sequence Diagram     | Full flow: Demonstrates the workflow of a form submission from frontend to backend.            | ![Sequence Diagram](https://github.com/amoheric/quickforms-ai/blob/main/docs/diagrams/UML%20sequence_%20Form%20Submission%20Workflow.png) |
| Deployment Diagram   | Infrastructure layout (frontend, backend, DB) Visualizes how QuickForms AI is deployed across client, server, and database environments.     | ![Deployment Diagram](https://github.com/amoheric/quickforms-ai/blob/main/docs/diagrams/UML%20deployment%20diagram%20example.png) |

---

## 7. 🗃️ Database Schema

The relational schema consists of `Form`, `Field`, and `Response` tables managed via Prisma.

🔗 ![Schema Diagram](https://github.com/amoheric/quickforms-ai/blob/main/docs/diagrams/QUICKFORM%20AI%20Database%20Schema%20for%20Form%20Management.png)

---

## 8. 🧪 Testing Summary

Testing included unit, integration, and system-level validation:

| Test ID | Component       | Input                            | Expected Output              | Result |
|---------|------------------|----------------------------------|------------------------------|--------|
| T1      | AI Generator     | “Registration form with name”    | Valid schema w/ 2 fields     | ✅ Pass |
| T2      | API Endpoint     | GET `/forms`                     | JSON list of all forms       | ✅ Pass |
| T3      | Form Submission  | Empty email field                | Error message shown          | ✅ Pass |

📎 Refer to `/docs/reports/testing.pdf` for the full Testing Report.
![Software Testing Report](https://github.com/amoheric/quickforms-ai/blob/main/docs/diagrams/Passed%20test.png)

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
