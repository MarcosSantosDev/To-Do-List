import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { TaskStatus } from '@/components/context/ToDoList/types';

const getColorByTaskStatus = (taskStatus: TaskStatus) => {
  switch (taskStatus) {
    case 'IN_PROGRESS':
      return '#f79824';
    case 'DONE':
      return '#61e294';
    default:
      return '#ededed';
  }
};

export const ItemLi = styled.li`
  list-style: none;
`;

export const BoxDiv = styled.div`
  display: grid;
  grid-template-columns: auto 160px;
  column-gap: 10px;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #22272e;
  border: 1px solid #444c56;
  border-radius: 6px;
`;

type ParagraphStyledProps = {
  taskStatus: TaskStatus;
  taskDone: boolean;
};

export const Paragraph = styled.p<ParagraphStyledProps>`
  ${({ taskStatus, taskDone }) => css`
    font-size: 16px;
    font-weight: 700;
    color: ${getColorByTaskStatus(taskStatus)};
    text-decoration-line: ${taskDone ? 'line-through' : 'none'};
    text-decoration-thickness: 2px;
    text-decoration-color: ${getColorByTaskStatus(taskStatus)};
  `}
`;

export const ButtonGroupDiv = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    margin-right: 10px;
  }

  & :last-child {
    margin: 0px;
  }
`;
