export interface ITodoItem {
  id: number;
  name: string;
  done: boolean;
}

export type TActive = 'All' | 'Active' | 'Completed';
