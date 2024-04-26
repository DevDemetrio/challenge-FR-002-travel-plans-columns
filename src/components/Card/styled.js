import styled from "styled-components"
import AvImagen from '../../assets/img/aviao1.svg'

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16.81rem;
  height: 26.56rem;
  padding: 10px 15px 12px 15px;
  border-radius: 5px;
  background-color: ${(props) => props.colorPrimary};

  @media (min-width: 600px){
    width: 22.18rem;
    height: 35rem;
    padding: 1.6rem 1.3rem 1.2rem 1.2rem;
  }

` 

export const TitleIcon = styled.div`
 width: 14.81rem;
 margin-bottom: 1rem;
 display: flex;
 align-items: center;

 @media (min-width: 600px){
    width: 19.56rem;
    margin-bottom: 1.562rem;
  }
 
`

export const TextButtoContainer = styled.div`
  width: 14.81rem;
  height: 19.68rem;
  padding: 1.5rem 1rem 3.18rem 1rem;
  background-color: ${(props) => props.colorSecundary};

  @media (min-width: 600px){
    width: 19.56rem;
    height: 26.25rem;
    padding: 1.8rem 1.6rem 3.18rem 1.3rem;
  }
`

export const AviaoImg = styled.div`
  display: block;
  width: 48px;
  height: 33px;
  margin: 27px 0 8px 0;
  background-image: url(${AvImagen});
  background-repeat: no-repeat;
`