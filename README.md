# 🚀 Task List: A React To-Do Application

## 📝 Description

This project is a simple To-Do List designed to help you manage your daily tasks efficiently. The application was initially bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The project has been significantly refactored to use a modern, centralized state management system, prioritizing clean code, modularity, and maintainability.

**Key Features:**

- **Quick Control:** Easily add, check, and delete tasks.
- **Bulk Operations:** A button to mark all tasks as completed.
- **Filtering:** A button to hide all completed tasks.
- **Data Persistence:** Tasks are synchronized with the browser's local storage, ensuring they remain after page refresh.

**Remember:** start with the quickest and easiest tasks to overcome procrastination.

---

## 🛠️ Technologies & Architecture

This section highlights the core technologies and architectural choices implemented in the project:

- **React (JavaScript Library)**
- **Redux Toolkit (RTK)** (Centralized state management, replacing local state hooks).
  - **Slices:** Used to define reducers and actions for the `tasks` domain.
- **Redux DevTools Extension** (For powerful debugging and tracking of state changes).
- **Styled Components** (CSS-in-JS library for component styling).
- **JavaScript (ES6+)**
- **HTML5**
- **Local Storage** (Synchronized via Redux Store subscription for data persistence).

---

## 🖼️ Demo

[Link to the Demo website](https://maja-glowania.github.io/todo-list-react/)

![to-do-list](https://github.com/user-attachments/assets/294dfe66-4544-448b-b40a-5a43e2d02e7a)

---

## ⚙️ Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own. You don't have to ever use this feature.
