# Task Management Application

This application provides a simple yet effective way to manage tasks, including creation, categorization, prioritization, and completion tracking. It's designed to be modular and easily extendable for more complex features.

## Features

*   **Task Creation:** Add new tasks with descriptions, categories, and priority levels.
*   **Categorization:** Organize tasks into categories for better management.
*   **Prioritization:** Assign priority levels to tasks to focus on what matters most.
*   **Completion Tracking:** Mark tasks as complete to track progress.
*   **Filtering and Sorting:** Easily filter and sort tasks by category, priority, and completion status.

## Technologies Used

*   JavaScript (ES6+)
*   HTML
*   CSS

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone [repository URL]
    cd task-management-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the application:**

    ```bash
    npm start
    ```

    This will typically open the application in your default browser at `http://localhost:3000`. (Configuration details are in `package.json`)

## Project Structure

The project is structured as follows:

*   `index.html`: The main HTML file containing the application's structure.
*   `src/`: Contains the JavaScript source code.
    *   `app.js`: The main application logic.
    *   `taskManager.js`: Handles task management operations.
    *   `ui.js`: Manages the user interface elements and interactions.
*   `style.css`: Contains the application's styling.
*   `package.json`: Lists project dependencies and scripts.
*   `README.md`: This file, providing project documentation.

## Usage

Once the application is running, you can:

*   Add a new task by entering a description, selecting a category and priority, and clicking "Add Task".
*   Mark a task as complete by clicking the checkbox next to it.
*   Filter tasks by category using the category selection dropdown.
*   Sort tasks by priority using the priority sort button.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, descriptive messages.
4.  Submit a pull request to the main branch.

## Future Enhancements

*   Implement local storage to persist tasks across sessions.
*   Add due dates to tasks.
*   Implement drag-and-drop functionality for task reordering.
*   Add user authentication.
*   Implement search functionality.
