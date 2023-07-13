import * as React from 'react';

import Button from '@/components/structure/Button/Button';
import { useMutationCreateTask } from '@/hooks';

import * as S from './Form.styles';

const Form = () => {
  const { mutateAsync: mutateAsyncCreateTask } = useMutationCreateTask();

  const confirmTaskCreation = async (taskTitle: string) => {
    await mutateAsyncCreateTask({
      title: taskTitle,
      status: 'CREATED',
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const taskTitle = data.get('taskTitle') as string | null;

    if (taskTitle) {
      confirmTaskCreation(taskTitle);
    }
  };

  return (
    <S.FormContainerDiv>
      <S.FormTitleH3>O que irá fazer hoje ?</S.FormTitleH3>
      <S.Form onSubmit={handleSubmit}>
        <S.Input type="text" name="taskTitle" placeholder="criar tarefas..." />
        <Button type="submit">Adicionar</Button>
      </S.Form>
    </S.FormContainerDiv>
  );
};

export default Form;
