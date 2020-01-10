import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 120px 140px 140px;

  h2 {
    color: black;
    margin-bottom: 12px;
  }

  h4 {
    color: black;
  }

  p {
    color: black;
  }

  strong {
    color: black;
    font-weight: bold;
  }
`;

export const Descriptions = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: #ccc;
  height: 18px;
`;

export const DivId = styled.div`
  display: flex;
  align-items: flex-start;
  width: 20%;
`;
export const DivType = styled.div`
  display: flex;
  align-items: flex-start;
  width: 20%;
`;
export const DivTitle = styled.div`
  display: flex;
  align-items: flex-start;
  width: 30%;
`;
export const DivActions = styled.div`
  display: flex;
  align-items: flex-start;
  width: 30%;
`;

export const PanelContainer = styled.div`
  box-shadow: 0 8px 8px -8px black;
  height: 200px;
  margin-top: 10px;
`;

export const PanelTable = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid #ccc;
`;

export const Id = styled.div`
  display: flex;
  align-items: flex-start;
  width: 20%;
  font-size: 12px;

  strong {
    color: #a9a9a9;
  }
`;

export const Type = styled.div`
  display: flex;
  align-items: flex-start;
  width: 20%;

  strong {
    color: #72159c;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: flex-start;
  width: 30%;
`;

export const Actions = styled.div`
  display: flex;
  align-items: flex-start;
  width: 30%;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const ButtonPrevious = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  &:disabled {
    opacity: 0.5;
    cursor: default;

    &:hover {
      opacity: 0.5;
      cursor: default;
    }
  }

  p {
    margin-left: 14px;
  }

  border: none;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  background: #755684;

  width: 120px;
  font-size: 15px;
  font-weight: bold;
  outline: none;
  margin-left: 10px;
  margin-right: 6px;
  &:hover {
    background: #72159c;
  }
`;

export const ButtonNext = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }

  p {
    margin-right: 14px;
  }

  border: none;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  background: #755684;

  width: 120px;
  font-size: 15px;
  font-weight: bold;
  outline: none;
  margin-left: 10px;
  margin-right: 6px;
  &:hover {
    background: #72159c;

    &:disabled {
      opacity: 0.5;
      cursor: default;
    }
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ButtonView = styled.button`
  border: none;
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
  color: black;

  transition: all 0.6s;
  border: 3px solid #228b22;

  margin-right: 12px;
  width: 60px;
  font-size: 12px;
  font-weight: bold;
  outline: none;
  margin-top: 5px;
  &:hover {
    background: #3cb371;
    transition-delay: 0.1s;
    transition-duration: 0.8s;
    transition: all 0.1s;
    color: white;
    border: none;
  }
`;

export const ButtonEdit = styled.button`
  border: none;
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
  color: black;

  border: 3px solid #0b75c2;

  margin-right: 12px;
  width: 60px;
  font-size: 12px;
  font-weight: bold;
  outline: none;
  margin-top: 5px;
  transition: all 0.6s;
  &:hover {
    background: #2993e0;
    transition-delay: 0.1s;
    transition-duration: 0.8s;
    transition: all 0.1s;
    color: white;
    border: none;
  }
`;

export const ButtonRemove = styled.button`
  border: none;
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
  color: black;
  border: 3px solid red;
  transition: all 0.6s;

  margin-right: 12px;
  width: 60px;
  font-size: 12px;
  font-weight: bold;
  outline: none;
  margin-top: 5px;
  &:hover {
    transition-delay: 0.1s;
    transition-duration: 0.8s;
    transition: all 0.1s;
    color: white;
    background: red;
    border: none;
  }
`;

export const DivModalView = styled.div`
  width: 100%;
  p {
    margin-top: 20px;
  }

  button {
    border: none;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    background: #f55b5b;
    margin-top: 150px;
    margin-left: 650px;

    margin-right: 12px;
    width: 80px;
    font-size: 12px;
    font-weight: bold;
    outline: none;

    &:hover {
      background: #ff0000;
    }
  }
`;

export const ButtonExit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  color: white;

  background: #f55b5b;
  margin-top: 10px;

  width: 80px;
  font-size: 16px;
  font-weight: bold;
  outline: none;

  &:hover {
    background: #ff0000;
  }
`;

export const ButtonCancel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;

  margin-top: 10px;

  width: 80px;
  font-size: 16px;
  font-weight: bold;
  outline: none;

  background: #b9bbbe;
  color: #666;
  &:hover {
    background: #999;
  }
`;
