import { useBoard } from "../../hooks";
import { IBoard } from "../../types";

import Column from "../Column";
import Button from "../Button";

interface IBoardProps {
  board: IBoard;
}

function Board({ board }: IBoardProps) {
  const {
    tasks,
    columns,
    addColumn,
    updateColumnName,
    deleteColumn,
    addTask,
    deleteTask,
    updateTaskDescription,
    updateTaskName,
  } = useBoard(board);

  return (
    <main className="flex flex-col">
      <header className="flex align-items-center justify-content-center px-10 mt-4">
        <h1 className="font-bold text-lg text-center">Simple Task Board</h1>
      </header>
      <ul className="flex flex-grow px-10 mt-4 space-x-10 overflow-auto">
        {columns.map((column) => (
          <Column
            key={column.id}
            id={column.id}
            name={column.name}
            tasks={tasks.filter((task) => task.columnId === column.id)}
            updateName={updateColumnName}
            deleteColumn={deleteColumn}
            addTask={addTask}
            deleteTask={deleteTask}
            updateTaskDescription={updateTaskDescription}
            updateTaskName={updateTaskName}
          />
        ))}
        <li className="flex flex-col justify-items-center align-items-center h-full w-72">
          <Button text="Add column" onClick={addColumn} />
        </li>
      </ul>
    </main>
  );
}

export default Board;
