import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 9999999;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;
  width: 25%;
  padding: 10px;
  background: #fff;
  align-items: center;
  border-radius: 4px;
  strong {
    color: #000;
    font-weight: bolder;
  }
  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    input {
      flex: 1;
      font-size: 18px;
      padding: 10px 10px 10px 5px;
      display: block;
      border: none;
      border-bottom: 1px solid #757575;
    }
    footer {
      padding: 10px 0;
      a {
        text-align: center;
        border: 0;
        border-radius: 3px;
        padding: 10px 10px;
        font-size: 24px;
        color: #fff;
        height: 50px;
        width: 100px;
        text-decoration: none;
        cursor: pointer;
        &.btn-cancel {
          background: #4b515d;

          &:hover {
            background: #3e4551;
          }
        }
      }
      button {
        text-align: center;
        border: 0;
        border-radius: 3px;
        padding: 0 10px;
        font-size: 24px;
        color: #fff;
        height: 50px;
        width: 100px;
        cursor: pointer;
        &.btn-save {
          margin-left: 10px;
          background: #00c851;

          &:hover {
            background: #007e33;
          }
        }
      }
    }
  }
`;
