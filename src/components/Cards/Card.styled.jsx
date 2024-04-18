import styled from "styled-components"

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22.18rem;
  height: 35rem;
  padding: 27px 22px 20px 20px;
  border-radius: 5px;
  background-color: ${(props) => props.cardColor};
` 

export const TitleIcon = styled.div`
 width: 19.56rem;
 margin-bottom: 53px;
`

export const TextButtoContainer = styled.div`
  width: 19.56rem;
  height: 21.68rem;
  padding: 30px 27px 51px 22px;
  background-color: #D77C1A;

`
