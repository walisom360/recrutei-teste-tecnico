import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 20px 120px 20px 140px;

  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 4px 10px 0px 10px;
    font-weight: bold;
  }

  textarea {
    width: 100%;
    height: 150px;
    padding: 20px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* margin: 20px 120px 20px 140px; */

  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 4px 10px 0px 10px;
    font-weight: bold;
  }

  textarea {
    width: 100%;
    height: 150px;
    padding: 20px;
  }
`;

export const PostTitle = styled.h2`
  color: purple;
`;

export const PostTitleForm = styled.h2`
  color: purple;
`;

export const ColumnSelect = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const ColumnInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 68%;
`;

export const TypePost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;

  select {
    width: 100%;
    height: 40px;
    border: 0;
    margin-right: 20px;
  }

  input {
    width: 100%;
    height: 40px;
    padding: 10px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  background: #3cb371;

  width: 120px;
  font-size: 15px;
  font-weight: bold;
  outline: none;
  margin-top: 5px;
  &:hover {
    background: #228b22;
  }
`;
