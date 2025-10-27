// src/ui.js

const taskManager = require('./taskManager');

document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');
    const addTaskForm = document.getElementById('addTaskForm');
    const categoryFilter = document.getElementById('categoryFilter');

    // Populate category filter options
    taskManager.getCategories().forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    // Function to render tasks
    function renderTasks(tasks) {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <input type="checkbox" data-id="${task.id}" ${task.completed ? 'checked' : ''}>
                <span>${task.description} (${task.category}, Priority: ${task.priority})</span>
            `;
            taskList.appendChild(listItem);
        });

        // Attach event listeners to checkboxes
        const checkboxes = document.querySelectorAll('#taskList input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (event) => {
                const taskId = event.target.dataset.id;
                taskManager.completeTask(taskId);
                renderTasks(getFilteredAndSortedTasks()); // Re-render after completion
            });
        });
    }

    // Function to get filtered and sorted tasks based on current filter
    function getFilteredAndSortedTasks() {
        const selectedCategory = categoryFilter.value;
        let tasks = taskManager.getTasks();

        if (selectedCategory !== 'all') {
            tasks = taskManager.getTasksByCategory(selectedCategory);
        }

        return tasks;
    }

    // Initial render
    renderTasks(taskManager.getTasks());

    // Add Task Form Submission
    addTaskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const descriptionInput = document.getElementById('taskDescription');
        const categoryInput = document.getElementById('taskCategory'); // Assuming you have a category selection input
        const priorityInput = document.getElementById('taskPriority');

        const description = descriptionInput.value;
        const category = categoryInput.value;
        const priority = parseInt(priorityInput.value); // Assuming priority is a number

        if (description && category && !isNaN(priority)) {
            taskManager.addTask(description, category, priority);
            descriptionInput.value = '';
            renderTasks(getFilteredAndSortedTasks()); // Re-render
        }
    });

     // Category Filter Change
     categoryFilter.addEventListener('change', () => {
         renderTasks(getFilteredAndSortedTasks());
     });

    // Sort by Priority Button
    const sortByPriorityButton = document.getElementById('sortByPriority');
    sortByPriorityButton.addEventListener('click', () => {
        renderTasks(taskManager.getSortedTasksByPriority());
    });


});