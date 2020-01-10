import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 625px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    padding: 40px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    h1 {
      font-size: 26px;
      font-weight: 500;
      text-align: center;
      margin: 0 0 10px;
      color: black;
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 4px 10px 0px 10px;
      font-weight: bold;
    }
    strong {
      color: black;
      font-size: 14px;
      line-height: 16px;
      font-weight: 600;
      margin-top: 15px;
    }
    input {
      height: 40px;
      padding: 10px;
      border-radius: 3px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      background-color: rgba(0, 0, 0, 0.1);
      color: black;
      margin-top: 8px;
      transition: border 0.15s ease;
      font-size: 16px;
      &:focus {
        border-color: #7289da;
      }
    }
    button {
      margin: 20px 0 0;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
