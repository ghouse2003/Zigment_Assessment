
## Dynamic Form Generator
A sophisticated web application that dynamically generates forms from JSON schemas, featuring real-time preview and validation. This project enables rapid form prototyping and development for enterprise-grade applications.

## Features
1. Dynamic form generation from JSON schemas.
2. Real-time form preview and validation.
3. Support for multiple field types (text inputs, dropdowns, radio buttons, etc.).
4. JSON schema editor with syntax highlighting and error reporting.
5. Mobile-first, responsive design.
6. Unit and end-to-end testing for reliable functionality.
   
## Tech Stack
1. Frontend Framework: React, TypeScript
2. Build Tool: Vite
3. Styling: Tailwind CSS
4. Form Management: React Hook Form
5. Code Editor: Monaco Editor
6. Testing: Vitest, Playwright
   
## Getting Started
Follow these steps to set up and run the project on your local machine.

1. Prerequisites
Ensure you have the following installed:
Node.js (v16 or later recommended)

1. Clone the Repository
Run the following command to clone the repository:
git clone https://github.com/ghouse2003/Zigment_Assessment.git

Navigate to the project directory:
cd Zigment_Assessment

3. Install Dependencies
Install the required npm packages:
npm install

4. Start the Development Server
Run the following command to start the local development server:
npm run dev

The application will be available at:
http://localhost:5173

5. Run Tests
To execute the unit and end-to-end tests:
npm run test

## Usage
Enter or upload a JSON schema in the editor.
The form will generate dynamically based on the schema.
Edit the schema in real time to see live updates in the form.
Submit the form to validate your inputs.

## Find the Below link for accesing the actual project deployed.
https://regal-crepe-5e47a2.netlify.app

In the JSON part try adding your own json texts, sample is given below, which changes the form dynamically.
{

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
