import { createContext, useEffect } from "react";
import { IBoard } from "../types";
import services from "../services";
import { findItemWithId } from "../utils";
import useLocalStorage from "../hooks/useLocalStorage";

export type BoardContextType = {
  boards: IBoard[];
  getBoard: (id: string) => IBoard | undefined;
  updateBoard: (board: IBoard) => void;
};

export const BoardContext = createContext<BoardContextType | null>(null);

const BoardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [boards, setBoards] = useLocalStorage("boards", []);

  useEffect(() => {
    setBoards(services.boards.getAll());
  }, [setBoards]);

  const getBoard = (id: string): IBoard | undefined => {
    return boards.find((board: IBoard) => board.id === id);
  };

  const updateBoard = (board: IBoard) => {
    const clonedBoards = [...boards];
    const [index] = findItemWithId(boards, board.id);
    if (index > -1) {
      clonedBoards[index] = board;
      setBoards(clonedBoards);
    }
  };

  return (
    <BoardContext.Provider value={{ boards, updateBoard, getBoard }}>
      {children}
    </BoardContext.Provider>
  );
};

export default BoardProvider;
