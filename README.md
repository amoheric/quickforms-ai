
# 📋 QuickForms AI – Smart Form & Workflow Builder

> **Final Project – CSC 318: Software Engineering Principles**  
> Student: *Eric Amoh Adjei* | Instructor: *Prof. Rawad Habib*  
> 🗓️ August 2025  
> ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
> ![React](https://img.shields.io/badge/React-18.x-61DAFB)
> ![Express](https://img.shields.io/badge/Express-4.x-black)
> ![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

---

## 📌 Overview
**QuickForms AI** is an AI-powered form generator for individuals, teams, and small businesses.  
It simplifies the creation of custom forms using natural language, auto-generates shareable links, collects responses, and exports data.

### ✨ Highlights:
- Create forms in minutes with AI assistance
- Share via public link
- Collect responses securely
- Export to CSV or Google Sheets

---

## 📚 Table of Contents
- [📋 QuickForms AI – Smart Form \& Workflow Builder](#-quickforms-ai--smart-form--workflow-builder)
  - [📌 Overview](#-overview)
    - [✨ Highlights:](#-highlights)
  - [📚 Table of Contents](#-table-of-contents)
  - [🎥 Demo \& Screenshots](#-demo--screenshots)
  - [🚀 Features](#-features)
  - [🏗️ Tech Stack](#️-tech-stack)
  - [📂 Project Structure](#-project-structure)
  - [⚙️ Getting Started](#️-getting-started)
    - [1. Clone Repo](#1-clone-repo)
    - [2. Install Dependencies](#2-install-dependencies)
    - [3. Set Up Environment](#3-set-up-environment)
    - [4. Run Locally](#4-run-locally)
  - [🧪 Testing](#-testing)
    - [✔ Coverage:](#-coverage)
  - [📖 Documentation](#-documentation)
  - [📦 Packaging](#-packaging)
  - [🔮 Roadmap](#-roadmap)
  - [👥 Development Process](#-development-process)
  - [🎓 Course Context](#-course-context)
  - [🏆 Lessons Learned](#-lessons-learned)
  - [📜 License](#-license)

---

## 🎥 Demo & Screenshots
- 🎬 YouTube Demo: 
  - ✅ [*[YouTube Demo:](https://youtu.be/yVylI9AM284)*
- PowerPoint Presentation: 
  - ✅ [*[Presentation:](/docs/Power-point/QuickForms(Power-point)-AI-Smart-Form-and-Workflow-Builder-Pptx.pdf)*
- 🖼️ Screenshots:
  - ✅ Form Builder UI
  ![User Interface Mockups](/docs/diagrams/1.User%20Interface%20Mockups%20.png)
  - ✅ AI Generated Fields & Response Dashboard
  ![AI Generated Fields](/docs/diagrams/3.%20User%20Interface%20Mockups%20(When%20AI%20Assist%20(mock)%20added%20suggested%20fields%20based%20on%20the%20title.)%20.png)
  - ✅ CSV Export View
  [Software Testing Passed Report](/docs/Submission%20Export%20Example/Downloadable-submissions-docs.csv)

---

## 🚀 Features
- ✍️ AI-Prompted Form Generation
- 🔧 Form Components: Text, Dropdowns, Radios, Checkboxes, Dates
- 🌐 Shareable Links
- 📥 Submission Handling & CSV Export
- 📊 Google Sheets/Webhook Integration
- 📱 Responsive UI (React + Vite + Tailwind)
- 🔐 Data Storage: SQLite/Postgres via Prisma
- 🧪 Unit + Integration Testing Suite

---

## 🏗️ Tech Stack

| Layer         | Technology                     | Purpose                        |
|---------------|-------------------------------|--------------------------------|
| **Frontend**  | React, Vite, TypeScript        | Dynamic UI                    |
| **Backend**   | Express, TypeScript            | REST API + AI Integration     |
| **Database**  | Prisma ORM, SQLite/Postgres    | Form/Response Persistence     |
| **Testing**   | Vitest, Supertest              | Full coverage testing         |
| **Build**     | pnpm, PowerShell Scripts       | Automation & Deployment       |

---

## 📂 Project Structure

```
quickforms-ai/
├── apps/
│   ├── web/       # Frontend (React)
│   └── api/       # Backend (Express)
├── prisma/        # DB Schema & Migrations
├── docs/          # UML, Reports, Manuals
│   ├── diagrams/
│   ├── reports/
│   └── user-manual/
├── tests/         # Unit + Integration Tests
├── README.md
└── package.json
```

---

## ⚙️ Getting Started

### 1. Clone Repo
```bash
git clone https://github.com/YOUR-USERNAME/quickforms-ai.git
cd quickforms-ai
```

### 2. Install Dependencies
```bash
cd apps/web && npm install       # Frontend
cd ../api && npm install         # Backend
```

### 3. Set Up Environment
Create `.env` in `/apps/api/`:
```env
DATABASE_URL="file:./dev.db"
PORT=4000
OPENAI_API_KEY="your_api_key"
```

### 4. Run Locally
```bash
# Frontend
cd apps/web && npm run dev
# Backend
cd apps/api && npm run dev
```

- Frontend → http://localhost:5173  
- Backend → http://localhost:4000

---

## 🧪 Testing

```bash
npm run test
```

### ✔ Coverage:
- ✅ Unit Tests – components & logic
- ✅ Integration Tests – API & flows
- ✅ System Tests – end-to-end form submission
- ✅ Manual Code Reviews

---

## 📖 Documentation

| 📘 File                  | Path                             |
|--------------------------|----------------------------------|
| Final Report             | `/docs/final-report/FinalReport.md` |
| Developer Guide          | `/docs/developer-guide/DeveloperGuide.md`   |
| User Manual              | `/docs/user-manual/UserManual.md`       |
| Testing Report           | `/docs/reports/TestingReport.md`     |
| Code Review Summary      | `/docs/code-review/CodeReview.md` |
| UML Diagrams             | `/docs/diagrams`        |
| SRS (Requirements Spec)  | `/docs/Schema/Schema.md`         |

---

## 📦 Packaging

```powershell
.ll-in-finals-build.ps1
```
This script packages the entire project into `quickforms-ai-final.zip` with all documentation and code.

---

## 🔮 Roadmap

- [ ] 🔐 User Authentication + Roles
- [ ] 📊 Analytics Dashboard for Form Insights
- [ ] 🧠 Advanced AI Prompt Suggestions
- [ ] ☁️ Production Deployment (Vercel + Render)

---

## 👥 Development Process

- 🌀 **Agile Sprints** – 2-week iterations
- 🔄 **Unified Process (UP)** – Full SDLC lifecycle
- 🔀 **Git Workflow** – Feature branches + PRs
- ✅ **Peer Reviews** – Before every merge

---

## 🎓 Course Context

> Developed for **CSC 318: Software Engineering Principles**  
> Demonstrates:
> - Requirements Engineering
> - UML & Architecture Design
> - Agile & Object-Oriented Programming
> - Full Testing + Documentation
> - Real-World Deployment-Ready MVP

---

## 🏆 Lessons Learned

- Mastered SDLC from planning to deployment
- Applied Agile + Unified Process collaboratively
- Designed layered MVC system
- Integrated OpenAI API & Google Sheets
- Built full documentation stack

---

## 📜 License

**MIT License © 2025 – [Eric Amoh Adjei](https://github.com/amoheric)**  
Free to use, modify, distribute.
