import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");

  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 8px -8px black;
  width: 100%;

  background: #353940;

  flex-wrap: wrap;
`;

export const Logo = styled.h2`
  margin: 20px 0 20px 20px;
  font-size: 45px;
  color: #fff;
  border: 1px solid #fff;
  padding: 8px;
`;

export const Statistics = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px;

  h2 {
    font-weight: bold;
    color: white;
  }

  strong {
    color: #72159c;
    font-weight: bold;
    font-size: 22px;
    border-color: 1px solid #fff;
  }
`;

export const DivUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  span {
    color: #fff;
    margin-right: 20px;
  }
`;

export const Button = styled.button`
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
