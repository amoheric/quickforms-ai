

\# 📘 Final Project Report – QuickForms AI



\*\*Course\*\*: CSC 318 – Software Engineering Principles  

\*\*Assignment\*\*: Final Project – QuickForms AI  

\*\*Student\*\*: Eric Amoh Adjei  

\*\*Instructor\*\*: Professor Rawad Habib  

\*\*Date\*\*: August 2025  



---



\## 1. 📌 Introduction



\*\*QuickForms AI\*\* is a smart, AI-assisted form builder designed to help small businesses and individuals create professional forms using natural language prompts and drag-and-drop editing — no coding required.



This report documents the full software development lifecycle (SDLC), including system design, architecture, UML models, testing, and methodology.



---



\## 2. 🎯 Project Overview



\- \*\*Problem\*\*: Non-technical users often struggle with creating custom forms.

\- \*\*Users\*\*: Small businesses, freelancers, educators, event planners.

\- \*\*Solution\*\*: AI-driven form creation + customization + export support.



\### ✅ Core Features

1\. AI-powered prompt-to-form generation  

2\. Drag-and-drop form editor  

3\. HTML export and shareable links  

4\. Response collection + CSV export



---



\## 3. 🎯 Scope \& Objectives



\### ✅ What it does:

\- Create forms from AI prompts

\- Manual field editing with drag \& drop

\- Store responses in a database

\- Export embeddable HTML



\### 🚫 What it excludes:

\- No full-scale analytics or reporting

\- No payment processing

\- No enterprise load balancing



---



\## 4. 🔧 Development Methodology



QuickForms AI was built using \*\*Agile\*\* + \*\*Unified Process (UP)\*\*:



\- \*\*Agile\*\*: Sprints, backlog, user stories, daily iteration

\- \*\*UP Phases\*\*:

&nbsp; - \*\*Inception\*\* – Identified business needs

&nbsp; - \*\*Elaboration\*\* – Designed system architecture + UML

&nbsp; - \*\*Construction\*\* – Full-stack development

&nbsp; - \*\*Transition\*\* – Testing + documentation



This hybrid method ensured continuous feedback and quality control.



---



\## 5. 🏗️ System Architecture



QuickForms AI uses a \*\*Layered MVC Architecture\*\*:



| Layer      | Technology                  | Description                      |

|------------|------------------------------|----------------------------------|

| Frontend   | React + Vite                 | Dynamic user interface           |

| Backend    | Express + Node.js            | REST API \& OpenAI integration    |

| Database   | Prisma ORM + SQLite/Postgres | Schema + data persistence        |

| AI Layer   | OpenAI API                   | Converts prompts to field schema |



🔗 \*\*Architecture Diagram\*\*: \[Lucidchart MVC Diagram](https://lucid.app/lucidchart/d8e710bf-4389-41f4-a888-cc2ecd8e624f)



---



\## 6. 🧩 UML Models



| Diagram Type        | Description                                         | Link |

|---------------------|-----------------------------------------------------|------|

| Use Case Diagram     | Actor interactions (User, AI, DB)                  | \[View](https://lucid.app/lucidchart/a958eb5a-2790-42cb-816e-fdb398adc52e) |

| Class Diagram        | Models: Form, Field, Response                      | \[View](https://lucid.app/lucidchart/55b5dab0-e8ed-4ffc-944c-bedf769bfb33) |

| Sequence Diagram     | Full flow: form creation → submission              | \[View](https://lucid.app/lucidchart/9ebac5f8-2750-4c49-a818-a68a9c01148f) |

| Deployment Diagram   | Infrastructure layout (frontend, backend, DB)      | \[View](https://lucid.app/lucidchart/1c700ff5-06c7-4310-b4ef-26c5ae98bbab) |



---



\## 7. 🗃️ Database Schema



The relational schema consists of `Form`, `Field`, and `Response` tables managed via Prisma.



🔗 \[Schema Diagram](https://lucid.app/lucidchart/bb13c9f2-ef7c-4fa7-b07a-97e29cee2578)



---



\## 8. 🧪 Testing Summary



Testing included unit, integration, and system-level validation:



| Test ID | Component       | Input                            | Expected Output              | Result |

|---------|------------------|----------------------------------|------------------------------|--------|

| T1      | AI Generator     | “Registration form with name”    | Valid schema w/ 2 fields     | ✅ Pass |

| T2      | API Endpoint     | GET `/forms`                     | JSON list of all forms       | ✅ Pass |

| T3      | Form Submission  | Empty email field                | Error message shown          | ✅ Pass |



📎 Refer to `/docs/reports/testing.pdf` for the full Testing Report.



---



\## 9. 🔍 Code Review Summary



\*\*Peer/self review\*\* focused on structure, naming, and best practices.



\### ✅ Strengths:

\- Modular components \& services

\- Consistent naming and file structure

\- Clean API responses



\### 🛠️ Fixes Made:

\- Enhanced error messages

\- Input validation on frontend

\- Normalized Prisma schema

\- Applied Prettier + ESLint rules



\*\*Lesson\*\*: Early reviews and linting reduce refactoring debt.



---



\## 10. ⚠️ Challenges \& Lessons Learned



| Challenge                   | Solution                                    |

|----------------------------|---------------------------------------------|

| AI misinterpretation       | Added fallback defaults and validations     |

| Postgres migration errors  | Refactored schema constraints               |

| Git merge conflicts        | Standardized branch naming \& commit format  |



✅ \*\*Lesson\*\*: Refactoring checkpoints avoid costly last-minute fixes.



---



\## 11. 🧠 Results \& Future Improvements



\*\*MVP Success\*\*: QuickForms AI is stable, usable, and demo-ready.



\### 🔮 Future Plans:

\- Analytics Dashboard (visual insights)

\- User authentication \& roles

\- Full CI/CD + cloud deployment

\- Integrations: Slack, Google Sheets, etc.



---



\## 12. ✅ Conclusion



QuickForms AI proves that an AI-enhanced form builder can be built with full SDLC coverage, UML modeling, testing, and documentation. It showcases:

\- Professional development skills

\- Agile + UP methodology in practice

\- Clean, maintainable code structure



The project is deployment-ready and ready for further scaling.



---



\## 📎 Appendix A – UML Bundle

\[UML Master View (Lucidchart)](https://lucid.app/lucidchart/489e72e7-0565-4b49-80b4-80ee0e3c059d)



---



\## 📎 Appendix B – Prisma Schema



```prisma

model Form {

&nbsp; id          String   @id @default(cuid())

&nbsp; title       String

&nbsp; description String?

&nbsp; fields      Field\[]

&nbsp; responses   Response\[]

}



model Field {

&nbsp; id      String @id @default(cuid())

&nbsp; type    String

&nbsp; label   String

&nbsp; formId  String

&nbsp; form    Form   @relation(fields: \[formId], references: \[id])

}



model Response {

&nbsp; id      String   @id @default(cuid())

&nbsp; formId  String

&nbsp; form    Form     @relation(fields: \[formId], references: \[id])

&nbsp; data    Json

}

```



---



