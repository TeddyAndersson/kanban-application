import Button from "../../Button/Button";

function ColumnHeader({
  title,
  buttons,
  onTitleChange,
}: {
  title: string;
  buttons?: { name: string; onClick: () => void }[];
  onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <header className="flex flex-col flex-shrink-0 mb-10">
      <input
        type="text"
        name="task"
        placeholder="Write a task name"
        value={title}
        onChange={onTitleChange}
        className="appearance-none font-bold rounded w-full mb-1 py-2 px-3 text-gray-700 bg-transparent hover:bg-gray-100 active:bg-gray-active focus:bg-gray-100 focus:shodow shadow-outline"
      />
      <section>
        {buttons &&
          buttons.map((button, index) => (
            <Button key={index} text={button.name} onClick={button.onClick} />
          ))}
      </section>
    </header>
  );
}
export default ColumnHeader;
