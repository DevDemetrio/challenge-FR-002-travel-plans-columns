import styled from "styled-components"

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22.18rem;
  height: 35rem;
  padding: 1.6rem 1.3rem 1.2rem 1.2rem;
  border-radius: 5px;
  background-color: ${(props) => props.colorPrimary};
` 

export const TitleIcon = styled.div`
 width: 19.56rem;
 margin-bottom: 1.562rem;
`

export const TextButtoContainer = styled.div`
  width: 19.56rem;
  height: 21.68rem;
  padding: 1.8rem 1.6rem 3.18rem 1.3rem;
  background-color: ${(props) => props.colorSecundary};
`
