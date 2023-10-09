import { ITask } from "../../types";
import TaskList from "../TaskList";
import ColumnHeader from "./components/ColumnHeader";

interface IColumnProps {
  id: string;
  name: string;
  tasks: ITask[];
  updateName: (name: string, columnId: string) => void;
  addTask: (columnId: string) => void;
  updateTaskName: (id: string, text: string) => void;
  updateTaskDescription: (id: string, text: string) => void;
  deleteTask: (taskId: string) => void;
  deleteColumn: (columnId: string) => void;
}

function Column({
  id,
  name,
  tasks,
  updateName,
  deleteColumn,
  addTask,
  deleteTask,
  updateTaskName,
  updateTaskDescription,
}: IColumnProps) {
  const tasksInColumn = tasks.filter((task) => task.columnId === id);

  const handleAddTask = () => {
    addTask(id);
  };

  const handleDeleteColumn = () => {
    deleteColumn(id);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateName(event.target.value, id);
  };

  const headerButtons = [
    {
      name: "Delete Column",
      onClick: handleDeleteColumn,
    },
  ];

  return (
    <li key={id} className="flex flex-col flex-shrink-0 w-72">
      <ColumnHeader
        title={name}
        buttons={headerButtons}
        onTitleChange={handleTitleChange}
      />
      <TaskList
        tasks={tasksInColumn}
        onAddTask={handleAddTask}
        onDeleteTask={deleteTask}
        onChangeTaskName={updateTaskName}
        onChangeTaskDescription={updateTaskDescription}
      />
    </li>
  );
}

export default Column;
