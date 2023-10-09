import { generateId } from "../utils";

export const boards = [
  {
    id: "1",
    name: "Simple Task Board",
    columns: [
      {
        id: "1",
        name: "To Do",
      },
      {
        id: "2",
        name: "In Progress",
      },
      {
        id: "3",
        name: "Done",
      },
    ],
    tasks: [
      {
        id: generateId(),
        name: "Add new lists",
        description: "The user should be able to add a new list",
        columnId: "3",
      },
      {
        id: generateId(),
        name: "Add a task",
        description: "The user should be able to add a task to a list",
        columnId: "3",
      },
      {
        id: generateId(),
        name: "Name a list",
        description: "The user should be a able to change the name of a list",
        columnId: "3",
      },
      {
        id: generateId(),
        name: "Update task",
        description:
          "The user should be able to update the name and description of a task",
        columnId: "3",
      },
      {
        id: generateId(),
        name: "Delete a task",
        description: "The user should be able to delete a task",
        columnId: "3",
      },
      {
        id: generateId(),
        name: "Sort specific lists",
        description: "The user should be able to sort the tasks within a list",
        columnId: "1",
      },
      {
        id: generateId(),
        name: "Filter all tasks on name",
        description:
          "The user should be able to filter all tasks in all lists based on the name of the task",
        columnId: "1",
      },
      {
        id: generateId(),
        name: "Transfer a task to another list",
        description:
          "The user should be able to “Transfer” an item between lists. Ex in a Todo list, from undone -> done",
        columnId: "1",
      },
      {
        id: generateId(),
        name: "Drag and drop tasks",
        description:
          "The user should be able to drag and drop an task between lists",
        columnId: "1",
      },
    ],
  },
];
