import Button from "../../Button";

interface ITaskProps {
  id: string;
  name: string;
  description: string;
  onDelete: () => void;
  onUpdateName: (id: string, name: string) => void;
  onUpdateDescription: (id: string, description: string) => void;
}

function Task({
  id,
  name,
  description,
  onDelete,
  onUpdateName,
  onUpdateDescription,
}: ITaskProps) {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateName(id, event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onUpdateDescription(id, event.target.value);
  };

  return (
    <li className="relative flex flex-col items-start p-4 mb-3 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100">
      <input
        key={`${id}-text-input`}
        type="text"
        name="task"
        placeholder="Write a task name"
        value={name}
        onChange={handleNameChange}
        className="appearance-none rounded w-full py-2 px-3 bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-active focus:bg-gray-100 focus:shodow shadow-outline"
      />
      <textarea
        key={`${id}-textarea`}
        rows={3}
        name="description"
        placeholder="Write a description name"
        value={description}
        onChange={handleDescriptionChange}
        className="resize-none appearance-none rounded bg-inherit w-full bg-transparent py-2 px-3 mb-2 text-gray-700 text-sm h-fit hover:bg-gray-100 active:bg-gray-active focus:bg-gray-100 focus:shadow-outline"
      />
      <Button text="Delete" onClick={onDelete} />
    </li>
  );
}

export default Task;
