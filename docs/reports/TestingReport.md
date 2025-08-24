

\# 🧪 Software Testing Report – QuickForms AI



\*\*Course\*\*: CSC 318 – Software Engineering Principles  

\*\*Assignment\*\*: Final Project – QuickForms AI  

\*\*Student\*\*: Eric Amoh Adjei  

\*\*Instructor\*\*: Professor Rawad Habib  

\*\*Date\*\*: August 2025  



---



\## 1. 📌 Introduction



This report summarizes the testing strategy, test cases, results, and lessons learned during the development of \*\*QuickForms AI\*\*. The testing process adhered to Agile and Unified Process (UP) principles, validating system stability and functionality across all layers.



---



\## 2. 🧪 Testing Methodologies



\- \*\*Unit Testing\*\* – Frontend + backend components  

\- \*\*Integration Testing\*\* – End-to-end communication across UI, API, and DB  

\- \*\*System Testing\*\* – Real-world workflows from form creation to export  

\- \*\*Manual/Exploratory Testing\*\* – Edge cases, usability, browser/device testing  

\- \*\*Performance Testing\*\* – Response time, concurrency stress testing



---



\## 3.⚙️ Test Environment



| Category       | Tools / Versions                        |

|----------------|------------------------------------------|

| OS             | Windows 11, macOS Ventura               |

| Backend        | Node.js 18, Express.js                  |

| Frontend       | React + Vite                            |

| Database       | SQLite (dev), Postgres (prod)           |

| Testing Tools  | Vitest, Jest, Supertest, Postman, Prisma Studio, Artillery |



---



\## 4. ✅ Unit Testing



\### 🔹 Frontend (React + Vite + TypeScript)

\- \*\*Tested Components\*\*: FormBuilder, FieldEditor  

\- \*\*Tools\*\*: Vitest, React Testing Library  

\- \*\*Focus\*\*: Rendering, validation, UI logic  

\- \*\*Result\*\*: ✅ >95% coverage



\### 🔹 Backend (Express + TypeScript)

\- \*\*Tested\*\*: API routes for form CRUD + submission  

\- \*\*Tools\*\*: Jest, Supertest  

\- \*\*Result\*\*: ✅ All endpoints responded correctly



\### 📄 Sample Test Cases



| ID  | Component             | Test Description                 | Expected Result                      | Status |

|-----|------------------------|----------------------------------|--------------------------------------|--------|

| U1  | AI Schema Generator    | Create schema from prompt        | 2 input fields                       | ✅ Pass |

| U2  | DB Save                | Store form response              | Appears in DB                        | ✅ Pass |

| U3  | Validation Logic       | Invalid email input              | Error returned                       | ✅ Pass |

| U4  | API `/forms`           | Fetch forms                      | Returns JSON array                   | ✅ Pass |



---



\## 5. 🔗 Integration Testing



\### 🔄 Scope:

UI ↔ API ↔ DB workflow validation



\- \*\*Flow 1\*\*: Create → Save → Verify in DB → Export CSV  

\- \*\*Flow 2\*\*: Submit Response → Save to DB → Display on Dashboard



| ID  | Workflow         | Description                       | Expected Outcome             | Status |

|-----|------------------|-----------------------------------|------------------------------|--------|

| I1  | Frontend → API   | Create + persist form             | Saved in DB                  | ✅ Pass |

| I2  | AI → Backend     | Prompt → Schema generation        | Correct schema returned      | ✅ Pass |

| I3  | DB → UI          | Submit + retrieve response        | Appears on dashboard         | ✅ Pass |



✅ All integration tests passed



---



\## 6. 🌐 System Testing (End-to-End)



Executed real-world usage simulations:



1\. Create → Publish → Collect → Export CSV  

2\. Invalid AI key triggers fallback handling  

3\. 50+ concurrent submissions → no crashes



✅ All user journeys validated successfully



---



\## 7. 🚀 Performance Testing



| Metric              | Result   | Target      |

|---------------------|----------|-------------|

| API Response Time   | ~420ms   | <500ms      |

| Page Load Time      | ~1.6s    | <2s         |

| Concurrent Writes   | ✅ Stable | No data loss |



\- \*\*Tooling\*\*: Postman Runner + Artillery CLI



✅ Meets performance benchmarks for MVP



---



\## 8. 🧪 Manual \& Exploratory Testing



\- Tested on Chrome, Edge, Firefox, Android mobile  

\- Edge cases: blank forms, duplicate fields, long responses  

\- All handled with user alerts + backend validation



✅ Ensured stability across devices + form types



---



\## 9. 🛠️ Issues Found \& Resolved



| Issue                             | Cause                        | Fix                             |

|----------------------------------|------------------------------|----------------------------------|

| Backend type error               | Missing `@types/express`     | Installed \& updated `tsconfig`  |

| JSX import warnings              | Vite config shift            | Cleaned + ESLint adjustments    |

| Duplicate form IDs               | Reused defaults              | Replaced with UUIDs             |

| Oversized ZIP size               | node\_modules included        | Updated script to exclude files |



---



\## 10. 📘 Lessons Learned



\- TypeScript type safety catches bugs early  

\- Automated tests prevent regressions  

\- Manual edge-case testing improves real-world UX  

\- Performance testing is essential—even for MVPs  

\- CI would help enforce consistency going forward



---



\## 11. 🔮 Future Testing Recommendations



\- Set up CI/CD pipelines to auto-run tests  

\- Expand edge case test coverage (large forms, mobile scroll)  

\- Add snapshot testing for UI consistency  

\- Load test with 1000+ concurrent submissions  

\- Implement security testing (XSS, SQL injection)



---



\## 12. ✅ Conclusion



QuickForms AI passed \*\*unit\*\*, \*\*integration\*\*, \*\*system\*\*, and \*\*performance\*\* tests. Testing confirms it’s stable, efficient, and ready for deployment.



> ✅ \*\*Final Verdict\*\*: A reliable MVP, tested and ready for real-world users.



---





