import styled from "styled-components"
import AvImagen from '../../assets/img/aviao1.svg'

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
 display: flex;
 align-items: center;
 
`

export const TextButtoContainer = styled.div`
  width: 19.56rem;
  height: 25.75rem;
  padding: 1.8rem 1.6rem 3.18rem 1.3rem;
  background-color: ${(props) => props.colorSecundary};
`

export const AviaoImg = styled.div`
  display: block;
  width: 48px;
  height: 33px;
  margin: 27px 0 8px 0;
  background-image: url(${AvImagen});
  background-repeat: no-repeat;
`