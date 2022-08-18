import * as React from 'react';
import { Task, TaskStatus } from '../../types';
import * as S from './Item.styles';
import Button from '../../../../structure/Button/Button';

type ItemProps = {
  id: number;
  title: string;
  status: TaskStatus;
  onChangeTaskStatus: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
};

type ButtonStatus = {
  [key in TaskStatus]: {
    buttonLabel: string;
    nextStatus: TaskStatus;
  };
};

const flowStatus: ButtonStatus = {
  CREATED: {
    buttonLabel: 'Iniciar',
    nextStatus: 'IN_PROGRESS',
  },
  IN_PROGRESS: {
    buttonLabel: 'Concluir',
    nextStatus: 'DONE',
  },
  DONE: {
    buttonLabel: 'Resetar',
    nextStatus: 'CREATED',
  },
};

const Item = ({
  id,
  title,
  status,
  onChangeTaskStatus,
  onDeleteTask,
}: ItemProps) => {
  const { buttonLabel, nextStatus } = flowStatus[status];

  const changeTaskStatus = () => {
    onChangeTaskStatus({
      id,
      title,
      status: nextStatus,
    });
  };

  const deleteTask = () => {
    onDeleteTask(id);
  };

  const taskDone = status === 'DONE';

  return (
    <S.ItemLi>
      <S.BoxDiv>
        <S.Paragraph taskStatus={status} taskDone={taskDone}>
          {title}
        </S.Paragraph>
        <S.ButtonGroupDiv>
          <Button
            type="button"
            title="alterar status da tarefa"
            onClick={changeTaskStatus}
            fullWidth
          >
            {buttonLabel}
          </Button>
          <Button
            type="button"
            title="remover tarefa"
            onClick={deleteTask}
            fullWidth
          >
            Remover
          </Button>
        </S.ButtonGroupDiv>
      </S.BoxDiv>
    </S.ItemLi>
  );
};

export default React.memo(Item);
