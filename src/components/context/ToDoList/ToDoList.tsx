import Form from './Form/Form';
import List from './List/List';
import * as S from './ToDoList.styles';

const ToDoList = () => {
  return (
    <S.ContainerDiv>
      <Form />
      <List />
    </S.ContainerDiv>
  );
};

export default ToDoList;
