import { useMutation, useQueryClient } from 'react-query';
import {
  createTask,
  updateTask,
  deleteTask,
} from '../../services/requests/todos';
import { ToDoListStateKeysEnum } from '../queries/types';

export const useMutationCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation(createTask, {
    onSuccess: () => {
      queryClient.invalidateQueries([ToDoListStateKeysEnum.FetchTaskList]);
    },
  });
};

export const useMutationUpdateTask = (page: number) => {
  const queryClient = useQueryClient();

  return useMutation(updateTask, {
    onSuccess: () => {
      queryClient.invalidateQueries([
        ToDoListStateKeysEnum.FetchTaskList,
        page,
      ]);
    },
  });
};

export const useMutationDeleteTask = (page: number) => {
  const queryClient = useQueryClient();

  return useMutation(deleteTask, {
    onSuccess: () => {
      queryClient.invalidateQueries([
        ToDoListStateKeysEnum.FetchTaskList,
        page,
      ]);
    },
  });
};
