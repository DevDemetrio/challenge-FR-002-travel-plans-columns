import styled from "styled-components";

export const BenefitContainer = styled.div`
      padding: 20px 0 0 38px;
      
`

export const BenefitListContainer = styled.ul`
     list-style: none;
     font-size: 17px;
     color: #FFFFFF;

     li:nth-child(even){
      margin: 7px 0;
     }
     
      li:before{
        content: '';
        display: inline-block;
        width: 7px;
        height: 7px;
        margin-right: 5px;
        border-radius: 50%;
        background-color: ${(props) => props.colorDetail};
      }

`

