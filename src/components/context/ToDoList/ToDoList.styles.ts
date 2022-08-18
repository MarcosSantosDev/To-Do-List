import styled from '@emotion/styled';

export const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: minmax(0px, 100px) auto auto minmax(0px, 100px);
  grid-template-areas:
    '. . .'
    '. formContainer .'
    '. listContainer .'
    '. . .';
  row-gap: 20px;
  max-height: 100vh;
`;
