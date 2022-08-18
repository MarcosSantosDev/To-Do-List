import styled from '@emotion/styled';

export const ListContainerDiv = styled.ul`
  grid-area: listContainer;

  display: grid;
  grid-template-rows: auto repeat(auto-fit, 50px);
  row-gap: 10px;
`;

export const ItemsContainerUl = styled.ul`
  display: grid;
  row-gap: 16px;
  height: max-content;
`;

export const ItemLi = styled.li`
  list-style: none;
`;

export const BoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #22272e;
  border: 1px solid #444c56;
  border-radius: 6px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #768390;
`;
