import React, { useState } from 'react';
import { JsonEditor } from './components/JsonEditor';
import { DynamicForm } from './components/DynamicForm';
import { FormSchema } from './types/schema';
import { Toaster } from 'react-hot-toast';
import { Split } from 'lucide-react';

const defaultSchema = {

  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "id": "companySize",
      "type": "select",
      "label": "Company Size",
      "required": true,
      "options": [
        { "value": "1-50", "label": "1-50 employees" },
        { "value": "51-200", "label": "51-200 employees" },
        { "value": "201-1000", "label": "201-1000 employees" },
        { "value": "1000+", "label": "1000+ employees" }
      ]
    },
    {
      "id": "industry",
      "type": "radio",
      "label": "Industry",
      "required": true,
      "options": [
        { "value": "tech", "label": "Technology" },
        { "value": "healthcare", "label": "Healthcare" },
        { "value": "finance", "label": "Finance" },
        { "value": "retail", "label": "Retail" },
        { "value": "other", "label": "Other" }
      ]
    },
    {
      "id": "timeline",
      "type": "select",
      "label": "Project Timeline",
      "required": true,
      "options": [
        { "value": "immediate", "label": "Immediate (within 1 month)" },
        { "value": "short", "label": "Short-term (1-3 months)" },
        { "value": "medium", "label": "Medium-term (3-6 months)" },
        { "value": "long", "label": "Long-term (6+ months)" }
      ]
    },
    {
      "id": "comments",
      "type": "textarea",
      "label": "Additional Comments",
      "required": false,
      "placeholder": "Any other details you'd like to share..."
    }
  ]
};

function App() {
  const [jsonValue, setJsonValue] = useState(JSON.stringify(defaultSchema, null, 2));
  const [parsedSchema, setParsedSchema] = useState<FormSchema>(defaultSchema);
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState<string>();

  const handleJsonChange = (value: string) => {
    setJsonValue(value);
    try {
      const parsed = JSON.parse(value);
      setParsedSchema(parsed);
      setIsValid(true);
      setError(undefined);
    } catch (e) {
      setIsValid(false);
      setError((e as Error).message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Split className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">
                Dynamic Form Generator
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-12rem)]">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
            <JsonEditor
              value={jsonValue}
              onChange={handleJsonChange}
              isValid={isValid}
              error={error}
            />
          </div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
            {isValid ? (
              <DynamicForm schema={parsedSchema} />
            ) : (
              <div className="p-4 text-red-600">
                Please fix the JSON errors to preview the form
              </div>
            )}
          </div>
        </div>
      </main>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;