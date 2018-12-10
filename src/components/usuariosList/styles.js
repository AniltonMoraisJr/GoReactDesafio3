import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  position: fixed;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  justify-content: center;
  margin: 10px auto 10px 10px;

  header {
    flex: 1;
    padding: 30px;
    align-items: center;
    text-align: center;
    border-bottom: 2px solid #999;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    flex: 1;
    list-style: none;
    text-align: center;

    & > * {
      flex: 1 100%;
    }
  }
`;
