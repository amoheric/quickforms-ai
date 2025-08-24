
# 👨‍💻 Developer Guide – QuickForms AI

**Course**: CSC 318 – Software Engineering Principles  
**Assignment**: Final Project – QuickForms AI  
**Student**: Eric Amoh Adjei  
**Instructor**: Professor Rawad Habib  
**Date**: August 2025  

---

## 📌 1. Overview

**QuickForms AI** is a smart online form generator built using a full-stack architecture:
- ✨ React frontend with TypeScript
- 🚀 Express backend with OpenAI integration
- 🗃️ Prisma-managed database
- 🤖 AI-powered schema generation

This guide will help developers:
- Set up the project locally
- Run and test the system
- Understand the file structure
- Contribute features
- Build for production

---

## 🛠️ 2. Technology Stack

| Layer        | Technology                   | Notes                                 |
|--------------|------------------------------|---------------------------------------|
| Frontend     | React + Vite + TypeScript    | Dynamic UI, drag-and-drop editor      |
| Backend      | Express.js + TypeScript      | REST API, AI integration               |
| Database     | Prisma + SQLite/Postgres     | SQLite (dev), scalable to Postgres    |
| Versioning   | Git + GitHub                 | Branching, PR workflow                |
| Build Tools  | npm, pnpm, tsc, vite         | Dependency & script management        |
| Testing      | Vitest, Jest, Supertest      | Unit, integration, and system tests   |

---

## ⚡ 3. Getting Started

### 3.1 Clone the Repository
```bash
git clone https://github.com/amoheric/quickforms-ai.git
cd quickforms-ai
```

### 3.2 Install Dependencies
```bash
# Frontend
cd apps/web && npm install

# Backend
cd ../api && npm install
```

### 3.3 Environment Setup
Create a `.env` file inside `apps/api/`:
```env
DATABASE_URL="file:./dev.db"
PORT=4000
OPENAI_API_KEY="your_api_key_here"
```

### 3.4 Database Setup
```bash
cd apps/api
npx prisma migrate dev --name init
```

---

## 🚀 4. Running the Application

### Backend (API)
```bash
cd apps/api
npm run dev
# http://localhost:4000
```

### Frontend (Web)
```bash
cd apps/web
npm run dev
# http://localhost:5173
```

✅ Visit [http://localhost:5173](http://localhost:5173) to access QuickForms AI locally.

---

## 🧪 5. Testing

### 5.1 Unit Tests
```bash
cd apps/api
npm test
# Tests functions & endpoints
```

### 5.2 Integration Tests
- Run frontend & backend concurrently.
- Simulate form creation and submission.

### 5.3 System Tests
- Full flow: Create → Fill → Submit → Export CSV
- Tested on Chrome, Edge, and Firefox

---

## 🧩 6. Project Structure

```
quickforms-ai/
├── apps/
│   ├── api/         # Express backend
│   └── web/         # React frontend
├── docs/            # Reports, UML, Manuals
├── prisma/          # Database schema
├── tests/           # Unit/integration tests
├── README.md
├── DeveloperGuide.md
└── .gitignore
```

- `apps/api` – Backend logic (routes, services, controllers)
- `apps/web` – Frontend UI with hooks & components
- `docs/` – All submitted documentation (PDF, diagrams, reports)
- `prisma/` – Schema files and migration history
- `tests/` – Automated test scripts

---

## 📖 7. Contribution Guidelines

### 🧑‍💻 Git Workflow
```bash
# 1. Fork the repo
# 2. Create a feature branch
git checkout -b feature/my-feature

# 3. Commit changes
git commit -m "Add form export to CSV"

# 4. Push & open pull request
```

### Code Style Guide
- Follow ESLint + Prettier config
- Use `camelCase` for functions/vars, `PascalCase` for components
- Write unit tests for all new features

---

## 🏗️ 8. Building for Production

### Frontend Build
```bash
cd apps/web
npm run build
```

### Backend Build
```bash
cd apps/api
npm run build
```

### Deployment Notes
- Windows: Run PowerShell `all-in-finals-build.ps1`
- Hosts: Vercel (frontend), Render/Heroku (backend)
- Prod DB: Use PostgreSQL instead of SQLite

---

## 🔮 9. Future Improvements

- 🔐 Add user authentication for private forms
- 🧠 Expand AI prompt handling (more field types)
- 👥 Role-based dashboards (admin vs. public user)
- 🔄 CI/CD pipeline for automated deploy & test

---
