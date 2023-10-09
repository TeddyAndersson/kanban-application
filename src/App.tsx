import { useContext } from "react";
import Board from "./components/Board/Board";
import { BoardContext, BoardContextType } from "./context/BoardContext";

const App = () => {
  const { getBoard } = useContext(BoardContext) as BoardContextType;
  const board = getBoard("1");

  return (
    <div className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      {board ? (
        <Board board={board} />
      ) : (
        <span className="loading loading-spinner text-primary"></span>
      )}
    </div>
  );
};

export default App;
