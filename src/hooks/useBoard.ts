import { ITask, IColumn, IBoard } from "../types";
import { useState } from "react";
import { findItemWithId, generateId } from "../utils";

function useBoard(board: IBoard) {
  const [tasks, setTasks] = useState<ITask[]>(board.tasks);
  const [columns, setColumns] = useState<IColumn[]>(board.columns);

  const addColumn = () => {
    const updatedColumns = columns.concat({
      id: generateId(),
      name: "New column",
    });
    setColumns(updatedColumns);
  };

  const updateColumnName = (name: string, id: string) => {
    const clonedColumns = [...columns];
    const [columnIndex, column] = findItemWithId(clonedColumns, id);
    if (column) {
      column.name = name;
      clonedColumns[columnIndex] = column;
      setColumns(clonedColumns);
    }
  };

  const deleteColumn = (columnId: string) => {
    const clonedColumns = [...columns];
    const [columnIndex] = findItemWithId(clonedColumns, columnId);

    if (columnIndex > -1) {
      // Remove all tasks that has relation with a Column
      const filteredTasks = tasks.filter((task) => task.columnId !== columnId);
      setTasks(filteredTasks);

      // Remove the column from state
      clonedColumns.splice(columnIndex, 1);
      setColumns(clonedColumns);
    }
  };

  const addTask = (columnId: string) => {
    const task: ITask = {
      id: generateId(),
      name: "New task",
      description: "Write a description...",
      columnId,
    };

    setTasks([...tasks, task]);
  };

  const updateTaskName = (id: string, text: string) => {
    const clonedTasks = [...tasks];
    const [index, task] = findItemWithId(clonedTasks, id);
    if (task) {
      task.name = text;
      clonedTasks[index] = task;
      setTasks(clonedTasks);
    }
  };

  const updateTaskDescription = (id: string, text: string) => {
    const clonedTasks = [...tasks];
    const [index, task] = findItemWithId(clonedTasks, id);

    if (task) {
      task.description = text;
      clonedTasks[index] = task;
      setTasks(clonedTasks);
    }
  };

  const deleteTask = (taskId: string) => {
    const clonedTasks = [...tasks];
    const [taskIndex] = findItemWithId(clonedTasks, taskId);

    if (taskIndex > -1) {
      clonedTasks.splice(taskIndex, 1);
      setTasks(clonedTasks);
    }
  };

  const getTasksWithColumnId = (id: string) => {
    return tasks.filter((task) => task.columnId === id);
  };

  return {
    tasks,
    columns,
    addColumn,
    updateColumnName,
    deleteColumn,
    addTask,
    updateTaskName,
    updateTaskDescription,
    deleteTask,
    getTasksWithColumnId,
  };
}
export default useBoard;
