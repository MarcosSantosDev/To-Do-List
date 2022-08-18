import * as React from 'react';
import { useIsMutating } from 'react-query';
import {
  useQueryFetchTaskList,
  useMutationUpdateTask,
  useMutationDeleteTask,
} from '../../../../hooks';
import Pagination from '../../../structure/Pagination/Pagination';
import { Task } from '../types';
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
      {isLoading ? (
        <div>
          <S.Paragraph>Carregando...</S.Paragraph>
        </div>
      ) : null}
      {!isLoading && isFetchingTaskList ? (
        <div>
          <S.Paragraph>Revalidando lista de tarefas...</S.Paragraph>
        </div>
      ) : null}
      <Pagination
        currentPage={taskList?.currentPage || 1}
        totalPages={taskList?.totalPages || 1}
        goToPagination={goToPagination}
      />
    </S.ListContainerDiv>
  );
};

export default List;
