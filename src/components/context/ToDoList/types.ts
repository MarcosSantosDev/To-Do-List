export type TaskStatus = 'DONE' | 'IN_PROGRESS' | 'CREATED';

export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
};

export type TasksWithPagination = {
  tasks: Task[];
  totalPages: number;
  currentPage: number;
};
