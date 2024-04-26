import styled from "styled-components";

export const BenefitContainer = styled.div`
      padding: 2.5rem 0 0 2.3rem;
   
`

export const BenefitListContainer = styled.ul`
     list-style: none;
     font-size: 0.75rem;
     color: #FFFFFF;

     @media (min-width: 600px){
        font-size: 17px;

         li:nth-child(even){
            margin: 7px 0;
         }
      }

     li:nth-child(even){
      margin: 0.437rem 0;
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

