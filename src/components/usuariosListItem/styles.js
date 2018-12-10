import styled from 'styled-components';

export const Usuario = styled.li`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  z-index: 99999999;

  &:not(:last-child){
    border-bottom: 1px solid #eee;
  }

  img {
    width: 52px;
    height: 52px;
    border-radius: 100px;
    border: 4px solid #cdcbcb;

    padding: 2px;
  }

  strong {
    color: #666;
  }

  button{
    border: 0;
    background: transparent;
    width: 40px;
    height: 40px;
    cursor:pointer;
    i {
      font-size: 28px;

      &.close {
        color: #f00;
      }
    }
  }

`;
