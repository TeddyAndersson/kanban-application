interface IButtonProps {
  text: string;
  onClick: () => void;
}

function Button({ text, onClick }: IButtonProps) {
  return (
    <button
      className="h-10 bg-blue-100 bg-opacity-50 hover:bg-gray-400 text-gray-800 font-bold text-sm py-1 px-4 rounded inline-flex items-center"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
