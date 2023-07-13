import * as React from 'react';
import { useIsMutating } from '@tanstack/react-query';

import Pagination from '@/components/structure/Pagination/Pagination';
import { Task } from '@/components/context/ToDoList/types';
import {
  useQueryFetchTaskList,
  useMutationUpdateTask,
  useMutationDeleteTask,
} from '@/hooks';

import Item from './Item/Item';
import * as S from './List.styles';

const List = () => {
  const [page, setPage] = React.useState(1);

  const {
    data: taskList,
    isLoading: isLoadingTaskList,
    isFetching: isFetchingTaskList,
  } = useQueryFetchTaskList({
    page,
  });
  const { mutateAsync: mutateAsyncUpdateTask } = useMutationUpdateTask(page);
  const { mutateAsync: mutateAsyncDeleteTask } = useMutationDeleteTask(page);

  const isLoadingMutations = useIsMutating() !== 0;

  const isLoading = isLoadingTaskList || isLoadingMutations;

  const goToPagination = (page = 1) => {
    setPage(page);
  };

  const handleChangeTaskStatus = async (task: Task) => {
    await mutateAsyncUpdateTask(task);
  };

  const handleDeleteTask = async (taskId: number) => {
    await mutateAsyncDeleteTask(taskId);
  };

  return (
    <S.ListContainerDiv>
      <S.ItemsContainerUl>
        {taskList?.tasks.map((task, index) => (
          <Item
            key={index}
            onChangeTaskStatus={handleChangeTaskStatus}
            onDeleteTask={handleDeleteTask}
            {...task}
          />
        ))}
      </S.ItemsContainerUl>
      <S.FeedbackBoxDiv>
        <S.Paragraph>
          {isLoading ? 'Status: Carregando...' : null}
          {!isLoading && isFetchingTaskList
            ? 'Status: Revalidando lista de tarefas...'
            : null}
        </S.Paragraph>
      </S.FeedbackBoxDiv>
      <Pagination
        currentPage={taskList?.currentPage || 1}
        totalPages={taskList?.totalPages || 1}
        goToPagination={goToPagination}
      />
    </S.ListContainerDiv>
  );
};

export default List;
