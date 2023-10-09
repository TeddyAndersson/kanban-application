export interface IBoard {
  id: string;
  name: string;
  columns: IColumn[];
  tasks: ITask[];
}

export interface IColumn {
  id: string;
  name: string;
}

export interface ITask {
  id: string;
  name: string;
  description: string;
  columnId: string;
}
