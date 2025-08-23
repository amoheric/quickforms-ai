# QuickForms AI â€” Smart Form & Workflow Builder

This is a finals-ready project that meets the rubric:
- 3+ core features (build form, public submit, submissions + CSV export)
- Layered architecture (UI â†’ API controllers/services â†’ domain â†’ data)
- UML (use case, class, sequence, deployment) in Mermaid
- Unit test scaffold (Vitest)
- Git repo with clean history
- Docs (User Manual, Developer Guide, Final Report)

## Run (development)
**Terminal A (API)**
1) \cd apps/api\
2) \pnpm install\ (or \
pm install\)
3) \Copy-Item .env.example .env\
4) \pnpm dev\ (or \
pm run dev\) â†’ http://localhost:4000

**Terminal B (Web)**
1) \cd apps/web\
2) \pnpm install\ (or \
pm install\)
3) \pnpm dev\ â†’ http://localhost:5173

## Demo Flow
1) In the Web UI: set a title, add fields, click **Save Form**
2) The API returns a form ID. Check JSON submissions at:
   - GET \/api/forms/{formId}/submissions\
   - GET \/api/forms/{formId}/export\ (Downloads CSV)
3) Public form metadata: GET \/p/{formId}\
4) Public submission: POST \/p/{formId}/submit\ with payload:
   \\\json
   { "values": [ { "fieldId": "<id>", "value": "..." } ] }
   \\\

## One-week plan (compressed)
Day1: CRUD | Day2: submit+submissions | Day3: UI polish | Day4: CSV+tests | Day5: docs+UML | Day6: slides+demo | Day7: report+ZIP