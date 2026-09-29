# Flowtick — Product Requirements Document (PRD)

## 1. Product Name
**Flowtick**

## 2. Product Summary
Flowtick is a lightweight, responsive todo-list web application that helps users quickly capture, organize, complete, edit, and remove everyday tasks.

The product should demonstrate an end-to-end AI-assisted software development workflow:

**Idea → Specification → AI Build → Structured Agent Instructions → GitHub → Live Deployment**

The first version should prioritize reliability, simplicity, responsiveness, accessibility, and clean design over unnecessary complexity.

## 3. Problem
People often need a fast way to record tasks without going through account creation, complicated project-management systems, or excessive configuration.

The application should allow someone to open the website and immediately begin organizing tasks.

## 4. Primary Goal
A user should be able to open Flowtick, create a task within seconds, manage it easily, and still find their tasks after refreshing or reopening the browser.

## 5. Target Users
- Students
- Developers
- Young professionals
- Anyone who needs lightweight personal task management

## 6. MVP Features
- Create tasks
- Edit tasks
- Complete/uncomplete tasks
- Delete tasks
- Filter by All / Active / Completed
- Persist tasks using browser localStorage
- Responsive design
- Accessible controls
- Clear empty states

## 7. Technical Stack
- Vite
- React
- JavaScript
- CSS
- Browser localStorage

Do not add a backend, authentication, payments, database, or AI API for V1.

## 8. Suggested Structure
```text
src/
├── components/
│   ├── TodoForm.jsx
│   ├── TodoList.jsx
│   ├── TodoItem.jsx
│   ├── TodoFilters.jsx
│   └── TodoStats.jsx
├── hooks/
│   └── useTodos.js
├── utils/
│   └── storage.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 9. Definition of Done
The MVP is complete when a user can:
- Create a task
- Edit a task
- Complete/uncomplete a task
- Delete a task
- Filter tasks
- Refresh without losing tasks
- Use the application on mobile
- Navigate important controls using a keyboard

`npm run build` must complete successfully.

## 10. Out of Scope for V1
- Authentication
- Database
- Accounts
- Collaboration
- Notifications
- Drag-and-drop
- Calendar
- Backend API
- AI API
- Team workspaces
- Payments
- 3D scenes
- Social features
