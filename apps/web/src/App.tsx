import { useMemo, useState } from "react";

/**
 * NOTE (front-end only, mock AI):
 * I’m adding a client-side "AI Assist (Mock)" that looks at the form title
 * and proposes a set of fields. This does not call any real AI service.
 * It’s perfect for the finals demo and matches the scope we promised.
 */

// --- Types that mirror our simple API payload shape ---
type FieldType = "TEXT" | "NUMBER" | "EMAIL" | "DROPDOWN" | "CHECKBOX";

type FieldDraft = {
  label: string;
  type: FieldType;
  required: boolean;
  // optional dropdown options for future use
  options?: string[];
};

type SavedField = FieldDraft & { id: string; order: number };
type SavedForm = {
  id: string;
  title: string;
  fields: SavedField[];
};

// Utility: dedupe by label (case-insensitive)
function dedupeByLabel(existing: FieldDraft[], incoming: FieldDraft[]): FieldDraft[] {
  const seen = new Set(existing.map((f) => f.label.toLowerCase().trim()));
  const merged: FieldDraft[] = [...existing];
  for (const f of incoming) {
    const key = f.label.toLowerCase().trim();
    if (!seen.has(key)) {
      merged.push(f);
      seen.add(key);
    }
  }
  return merged;
}

/**
 * Mock AI suggestions:
 * I look at the title and return a curated set of fields that make sense.
 * You can expand these switch-cases any time to impress in the demo.
 */
function getAiSuggestions(title: string): FieldDraft[] {
  const t = (title || "").toLowerCase();

  // Common packs
  const contactPack: FieldDraft[] = [
    { label: "Full Name", type: "TEXT", required: true },
    { label: "Email", type: "EMAIL", required: true },
    { label: "Phone", type: "TEXT", required: false },
  ];

  const addressPack: FieldDraft[] = [
    { label: "Street Address", type: "TEXT", required: false },
    { label: "City", type: "TEXT", required: false },
    { label: "State", type: "TEXT", required: false },
    { label: "Zip Code", type: "NUMBER", required: false },
  ];

  if (t.includes("rsvp") || t.includes("event")) {
    return [
      ...contactPack,
      { label: "Attending?", type: "DROPDOWN", required: true, options: ["Yes", "No", "Maybe"] },
      { label: "Number of Guests", type: "NUMBER", required: false },
      { label: "Dietary Restrictions", type: "TEXT", required: false },
    ];
  }

  if (t.includes("feedback") || t.includes("survey")) {
    return [
      ...contactPack,
      { label: "How satisfied are you?", type: "DROPDOWN", required: true, options: ["1", "2", "3", "4", "5"] },
      { label: "Comments", type: "TEXT", required: false },
      { label: "Contact me about my feedback", type: "CHECKBOX", required: false },
    ];
  }

  if (t.includes("job") || t.includes("application") || t.includes("apply")) {
    return [
      ...contactPack,
      ...addressPack,
      { label: "LinkedIn URL", type: "TEXT", required: false },
      { label: "Portfolio URL", type: "TEXT", required: false },
    ];
  }

  if (t.includes("registration") || t.includes("signup")) {
    return [
      ...contactPack,
      ...addressPack,
      { label: "Age", type: "NUMBER", required: false },
      { label: "T-Shirt Size", type: "DROPDOWN", required: false, options: ["S", "M", "L", "XL"] },
    ];
  }

  // Default generic pack
  return [
    ...contactPack,
    ...addressPack,
    { label: "Notes", type: "TEXT", required: false },
  ];
}

export default function App() {
  // --- builder state ---
  const [title, setTitle] = useState<string>("New Form");
  const [fields, setFields] = useState<FieldDraft[]>([
    { label: "Name", type: "TEXT", required: true },
    { label: "Email", type: "EMAIL", required: true },
  ]);

  // I store the created formId after I save, so I can show links
  const [savedForm, setSavedForm] = useState<SavedForm | null>(null);

  // For the “Submissions” links, we only show them once a form exists
  const publicPath = useMemo(() => {
    if (!savedForm?.id) return null;
    return `/p/${savedForm.id}`;
  }, [savedForm]);

  // --- UI handlers ---
  const addField = () => {
    setFields((f) => [
      ...f,
      { label: "New Field", type: "TEXT", required: false },
    ]);
  };

  const updateField = (idx: number, patch: Partial<FieldDraft>) => {
    setFields((prev) => prev.map((f, i) => (i === idx ? { ...f, ...patch } : f)));
  };

  const removeField = (idx: number) => {
    setFields((prev) => prev.filter((_, i) => i !== idx));
  };

  // NEW: AI Assist (mock) – merges curated suggestions into my current fields
  const handleAiAssist = () => {
    const suggestions = getAiSuggestions(title);
    const merged = dedupeByLabel(fields, suggestions);
    setFields(merged);
    alert("AI Assist (mock) added suggested fields based on the title.");
  };

  // Save to API
  const saveForm = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          fields: fields.map((f, idx) => ({
            label: f.label,
            type: f.type,
            required: f.required,
            order: idx,
            options: f.options && f.options.length ? f.options : undefined,
          })),
        }),
      });
      if (!res.ok) throw new Error(`Save failed: ${res.status}`);
      const data = (await res.json()) as SavedForm;
      setSavedForm(data);
      alert(`Saved. Public path on API host: /p/${data.id}`);
    } catch (e: any) {
      alert(`Failed to save: ${e.message || e}`);
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: "2rem auto", padding: "0 1rem" }}>
      <h1>QuickForms AI</h1>

      <section>
        <h2>Builder</h2>

        <div style={{ margin: "0.5rem 0 1rem" }}>
          <label style={{ marginRight: 8 }}>Title:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: 280 }}
          />
        </div>

        <ul>
          {fields.map((f, i) => (
            <li key={i} style={{ marginBottom: 8 }}>
              <input
                value={f.label}
                onChange={(e) => updateField(i, { label: e.target.value })}
                style={{ width: 260, marginRight: 8 }}
              />
              <select
                value={f.type}
                onChange={(e) => updateField(i, { type: e.target.value as FieldType })}
                style={{ marginRight: 8, width: 110 }}
              >
                <option value="TEXT">TEXT</option>
                <option value="EMAIL">EMAIL</option>
                <option value="NUMBER">NUMBER</option>
                <option value="DROPDOWN">DROPDOWN</option>
                <option value="CHECKBOX">CHECKBOX</option>
              </select>

              <label style={{ marginRight: 8 }}>
                <input
                  type="checkbox"
                  checked={f.required}
                  onChange={(e) => updateField(i, { required: e.target.checked })}
                  style={{ marginRight: 6 }}
                />
                required
              </label>

              <button onClick={() => removeField(i)}>Remove</button>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
          <button onClick={addField}>+ Add Field</button>
          <button onClick={saveForm}>Save Form</button>
          <button onClick={handleAiAssist} title="Suggest fields from the title">
            ✨ AI Assist (Mock)
          </button>
          <span style={{ fontSize: 12, color: "#666", alignSelf: "center" }}>
            *Uses the title as a prompt. No external AI calls — mocked for finals.
          </span>
        </div>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Submissions</h2>
        {!savedForm ? (
          <p><em>Save a form first</em></p>
        ) : (
          <div>
            <p>
              <a href={`http://localhost:4000/api/forms/${savedForm.id}/submissions`} target="_blank" rel="noreferrer">
                View submissions (JSON)
              </a>
            </p>
            <p>
              <a href={`http://localhost:4000/api/forms/${savedForm.id}/export`} target="_blank" rel="noreferrer">
                Export CSV
              </a>
            </p>
            <p style={{ fontSize: 12, color: "#555" }}>
              Public metadata endpoint: <code>http://localhost:4000{publicPath}</code>
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
