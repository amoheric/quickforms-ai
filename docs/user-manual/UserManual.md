
# 📘 User Manual – QuickForms AI

**Course**: CSC 318 – Software Engineering Principles  
**Assignment**: Final Project – QuickForms AI  
**Student**: Eric Amoh Adjei  
**Instructor**: Professor Rawad Habib  
**Date**: August 2025  

---

## 1. 📌 Introduction

**QuickForms AI** is a lightweight, AI-powered form builder designed for small businesses, clubs, and individuals. With the help of natural language prompts and drag-and-drop customization, users can easily create and manage forms — without needing to write code.

### 🧱 Technology Stack

- **Frontend**: React + Vite  
- **Backend**: Node.js + Express  
- **Database**: Prisma ORM (SQLite or Postgres)  
- **AI Layer**: Large Language Model (LLM) for prompt-to-field generation  

### ✨ Core Features

1. AI-powered form generation  
2. Drag-and-drop form editor  
3. Public shareable links  
4. Response collection and dashboard  
5. CSV export for analytics/reporting  

---

## 2. 🛠️ Getting Started

### 2.1 System Requirements

- OS: Windows 10/11, macOS, Linux  
- Node.js: v18+  
- Package Manager: `pnpm` or `npm`  
- Browser: Chrome (recommended), Edge, Firefox  
- Optional: Postgres (if not using SQLite)  

### 2.2 Installation & Setup

#### Step 1 – Clone Repository

```bash
git clone https://github.com/your-username/quickforms-ai.git
cd quickforms-ai
```

#### Step 2 – Install Dependencies

```bash
# Frontend
cd apps/web
pnpm install   # or npm install

# Backend
cd ../api
npm install
```

#### Step 3 – Environment Configuration

Create `.env` file in `apps/api/`:

```env
DATABASE_URL="file:./dev.db"
OPENAI_API_KEY="your_api_key_here"
PORT=4000
```

#### Step 4 – Initialize Database

```bash
pnpm prisma migrate dev --name init
```

#### Step 5 – Run the Application

```bash
# Start backend
cd apps/api
pnpm run dev

# Start frontend
cd apps/web
pnpm run dev
```

Visit: http://localhost:5173

---

## 3. 🚀 Using QuickForms AI

### 3.1 Creating a New Form

1. Launch dashboard → Click “New Form”  
2. Add form title & description  
3. Use AI prompt like: “Create a registration form with name, email, and password”  
4. Customize fields via drag-and-drop  

### 3.2 Publishing & Sharing a Form

1. Open a form from dashboard  
2. Click “Share Link” → Copy URL  
3. Share via email, chat, social media  

### 3.3 Submitting & Collecting Responses

- Form is filled by users → Click “Submit”  
- Response is saved and visible in the dashboard  

### 3.4 Viewing & Exporting Results

1. Select form → Click “Export CSV”  
2. Open CSV in Excel, Google Sheets, or Notion  

---

## 4. 🔁 Example Workflow

> A club president creates a **Member Survey**, shares it via WhatsApp, collects 30+ responses, and exports the results into Excel for analysis.

---

## 5. 🧪 Testing the System

### Automated Testing

```bash
cd apps/api
npm test
```

### Manual Flow

- Create → Submit → Export → Review

---

## 6. ⚠️ Troubleshooting

| Issue               | Cause / Diagnosis                  | Solution                          |
|---------------------|-------------------------------------|-----------------------------------|
| API not running     | Port conflict / bad `.env`          | Ensure port 4000 is available     |
| Frontend won’t start| Missing dependencies                | Run `npm install` in `/apps/web`  |
| DB error            | Migration not initialized           | Run `prisma migrate dev`          |
| Forms not saving    | Backend not started                 | Run backend before frontend       |
| Link broken         | Invalid or expired URL              | Copy fresh from dashboard         |
| CSV won’t open      | No compatible app                   | Use Excel or Google Sheets        |
| Fields not visible  | Cache issue                         | Refresh browser (Ctrl+Shift+R)    |
| AI not responding   | Invalid OpenAI key                  | Update `.env` with valid key      |

---

## 7. ❓ FAQs

**Q: Do respondents need accounts?**  
A: No, public sharing is supported.

**Q: Can I edit forms after publishing?**  
A: Yes, changes are live instantly.

**Q: Is my data private?**  
A: Yes, only the creator can export responses.

**Q: Can I deploy this app online?**  
A: Yes, use Vercel (frontend) + Render/Heroku (backend).

**Q: Can I apply themes?**  
A: Yes, edit the React component styles.

**Q: Is login/auth available?**  
A: Not yet; planned for future versions.

---

## 8. 📞 Support & Contact

For help, contact the development team:

- GitHub: [QuickForms AI Issues](https://github.com/your-username/quickforms-ai/issues)  
- Email: eriamoha@uat.edu / eric@amoheric.com

---
