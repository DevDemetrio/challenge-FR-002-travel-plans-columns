import styled from "styled-components";

export const Button = styled.button`
  width: 7.5rem;
  height: 2.3rem;
  margin-top: 2.5rem;
  border-radius: 30px;
  border: 1px solid #FFFFFF;
  background: none;

  font-size: 12px;
  font-weight: 600;
  color: #FFFFFF;
  cursor: pointer;
  transition: .5s;

  @media (min-width: 600px){
    width: 159px;
    height: 49px;
    margin-top: 60px;
    border-radius: 30px;
    font-size: 18px;  
  }

  &:hover{
    font-size: 19px;
  }

  &:active{
    background-color: #DBDBDB;
    transition: none;
  }
`