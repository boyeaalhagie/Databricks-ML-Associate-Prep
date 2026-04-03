# Databricks ML Associate — Quiz App

An interactive quiz app for studying the Databricks Certified Machine Learning Associate exam. Built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 168 practice questions across 4 exam sections
- Questions and options shuffled on every load
- Instant answer feedback with explanations
- Section filter to focus on specific topics
- Links to the official exam guide and additional practice resources

## Exam Sections

| Section                     | Questions |
| --------------------------- | --------- |
| Databricks Machine Learning | 50        |
| Data Processing             | 37        |
| Model Development           | 51        |
| Model Deployment            | 30        |

## Getting Started

```bash
cd quiz-app
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

Output is placed in the `dist/` folder.

## Adding a New Certification

1.  Add a data file — create a new src/data/<cert>.ts using the same Question interface
2.  Create a home page — cards grid that navigates to each cert's quiz
3.  Add routing — install React Router, wire up /, /databricks-ml-associate, /databricks-ml-professional, etc.
4.  Create a quiz component — copy App.tsx, swap the import, update the header/links

## Tech Stack

- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)

## Disclaimer

- Each question, answer and explanation was generated using AI,
- using the official exam guide as a source of truth.
- VERIFY ANSWERS, I (Alhagie Boyea) AM NOT RESPONSIBLE FOR ANY INCORRECT ANSWERS.
- This is for study purposes only.

## Licence

Do whatever you want with this code.
