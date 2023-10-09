import Task from "./components/Task";
import Button from "../Button";
import { ITask } from "../../types";

interface ITaskListProps {
  tasks: ITask[];
  onDeleteTask: (id: string) => void;
  onAddTask: () => void;
  onChangeTaskName: (id: string, text: string) => void;
  onChangeTaskDescription: (id: string, text: string) => void;
}

function TaskList({
  tasks,
  onDeleteTask,
  onAddTask,
  onChangeTaskName,
  onChangeTaskDescription,
}: ITaskListProps) {
  return (
    <ul className="flex flex-col pb-2 overflow-auto">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          description={task.description}
          onDelete={() => onDeleteTask(task.id)}
          onUpdateName={onChangeTaskName}
          onUpdateDescription={onChangeTaskDescription}
        />
      ))}
      <Button text="Add task" onClick={onAddTask} />
    </ul>
  );
}

export default TaskList;
