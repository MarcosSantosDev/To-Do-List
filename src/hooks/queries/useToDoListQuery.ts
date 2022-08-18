import { useQuery } from 'react-query';
import { fetchTaskList, FetchTaskList } from '../../services/requests/todos';
import { ToDoListStateKeysEnum } from './types';

export function useQueryFetchTaskList(props: FetchTaskList) {
  return useQuery(
    [ToDoListStateKeysEnum.FetchTaskList, props.page],
    () => fetchTaskList(props),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    },
  );
}
