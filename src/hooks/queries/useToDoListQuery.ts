import { useQuery } from '@tanstack/react-query';

import { fetchTaskList, FetchTaskList } from '@/services/requests/todos';

import { ToDoListStateKeysEnum } from './types';

export function useQueryFetchTaskList(props: FetchTaskList) {
  return useQuery({
    queryKey: [ToDoListStateKeysEnum.FetchTaskList, props.page],
    queryFn: () => fetchTaskList(props),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
}
