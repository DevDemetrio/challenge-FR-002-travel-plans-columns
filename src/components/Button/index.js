import styled from "styled-components";

export const Button = styled.button`
  width: 159px;
  height: 49px;
  margin-top: 60px;
  border-radius: 30px;
  border: 1px solid #FFFFFF;
  background: none;

  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
  cursor: pointer;
  transition: .5s;

  &:hover{
    font-size: 19px;
  }

  &:active{
    background-color: #DBDBDB;
    transition: none;
  }
`