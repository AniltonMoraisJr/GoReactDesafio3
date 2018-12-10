import styled from 'styled-components';

export const Usuario = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  cursor: pointer;

  &:hover {
    background: #445;
  }
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  strong {
    color: #666;
  }

  i {
    font-size: 28px;

    &.close {
      color: #f00;
    }
  }
`;
