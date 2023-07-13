import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createTask, updateTask, deleteTask } from '@/services/requests/todos';
import { ToDoListStateKeysEnum } from '@/hooks/queries/types';

export const useMutationCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries([ToDoListStateKeysEnum.FetchTaskList]);
    },
  });
};

export const useMutationUpdateTask = (page: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTask,
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

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries([
        ToDoListStateKeysEnum.FetchTaskList,
        page,
      ]);
    },
  });
};
