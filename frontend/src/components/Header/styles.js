import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 8px -8px black;
  width: 100%;
  height: 105px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(105, 100, 178, 1) 0%,
    rgba(179, 176, 214, 1) 0%,
    rgba(180, 177, 214, 1) 0%,
    rgba(169, 166, 209, 1) 0%,
    rgba(151, 147, 200, 1) 1%,
    rgba(110, 102, 207, 1) 100%,
    rgba(229, 228, 238, 1) 100%,
    rgba(20, 13, 134, 1) 100%
  );
`;

export const Logo = styled.h1`
  margin: 0 0 20px 20px;
  color: #fff;
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
    color: violet;
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
  background: #0b75c2;

  width: 120px;
  font-size: 15px;
  font-weight: bold;
  outline: none;
  margin-left: 10px;
  margin-right: 6px;
  &:hover {
    background: #2993e0;
  }
`;
