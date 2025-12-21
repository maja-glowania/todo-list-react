# 🚀 Task List: A React To-Do Application

## 📝 Description

This project is a functional To-Do List application designed to help you manage your daily tasks efficiently. The application was initially bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and has been refactored into a professional-grade state management architecture.

The project prioritizes clean code, modularity, and the separation of business logic from the UI.

**Key Features:**

- **Quick Control:** Easily add, check, and delete tasks.
- **Bulk Operations:** Instantly mark all tasks as completed or toggle their visibility.
- **Data Persistence:** Integrated **Redux-Saga** to manage Local Storage, ensuring tasks are saved even after a page refresh.
- **Example Data Fetching:** Fetch sample tasks from an external JSON file using asynchronous Saga effects.
- **Advanced Filtering:** Real-time task filtering synchronized with the URL query parameters (using React Router).

---

## 🛠️ Technologies & Architecture

This project uses a modern React stack to handle complex side effects and state:

- **React (JavaScript Library)**
- **Redux Toolkit (RTK):** Centralized state management using Slices.
- **Redux-Saga:** Middleware for handling asynchronous actions like fetching data and managing Local Storage.
- **React Router:** For navigation and managing search parameters in the URL.
- **Styled Components:** CSS-in-JS for clean, component-scoped styling.
- **Custom Hooks:** Reusable logic for managing URL parameters.

---

## 🖼️ Demo

[Link to the Demo website](https://maja-glowania.github.io/todo-list-react/)

![to-do-list-react](https://github.com/user-attachments/assets/e007f442-56c5-4411-b115-c9e60bfabc2c)

---

## ⚙️ Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run deploy`

Deploys the application to GitHub Pages.
