export interface ITodoItem {
  id: number;
  name: string;
  done: boolean;
}

export type TTab = 'All' | 'Active' | 'Completed';
