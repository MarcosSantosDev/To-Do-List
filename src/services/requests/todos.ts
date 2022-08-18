import {
  Task,
  TasksWithPagination,
} from '../../components/context/ToDoList/types';
import clientHttp from '../clientHttp';

const getTotalPages = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit);
};

export type FetchTaskList = {
  page?: number;
  limit?: number;
  order?: 'asc' | 'desc';
};

export const fetchTaskList = async ({
  page = 1,
  limit = 3,
  order = 'asc',
}: FetchTaskList): Promise<TasksWithPagination> => {
  const querySearch = `?_page=${page}&_limit=${limit}&_sort=id&_order=${order}`;

  const { data, headers } = await clientHttp.get<Task[]>(
    `/todos${querySearch}`,
  );

  const totalCount = Number(headers['x-total-count'] || 0);
  const totalPages = getTotalPages(totalCount, limit);

  return {
    tasks: data,
    totalPages,
    currentPage: page,
  };
};

export const createTask = async (taskToCreate: Omit<Task, 'id'>) => {
  const { data } = await clientHttp.post<Task>('/todos', taskToCreate);

  return data;
};

export const updateTask = async (taskToUpdate: Task) => {
  const { data } = await clientHttp.put<Task>(
    `/todos/${taskToUpdate.id}`,
    taskToUpdate,
  );

  return data;
};

export const deleteTask = async (id: number) => {
  const { data } = await clientHttp.delete<void>(`/todos/${id}`);

  return data;
};
