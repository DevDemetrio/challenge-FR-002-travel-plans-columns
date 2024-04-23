import Benefit from "../Benefit"
import CardBotao from "../CardBotao/CardBotao"
import CardTexto from "../CardTexto/CardTexto"
import CardTitulo from "../CardTitulo/CardTitulo"
import { Article, TextButtoContainer, TitleIcon } from "./Card.styled"
import { AviaoImg } from "./Imagen.styled"


const Cards = ({colorPrimary, colorSecundary, colorDetail ,titulo, texto}) =>{


  return(
    <Article colorPrimary={colorPrimary}>
        <TitleIcon>
          <AviaoImg />
          <CardTitulo titulo={titulo}/>
        </TitleIcon>
        <TextButtoContainer colorSecundary={colorSecundary}>
          <CardTexto texto={texto}/>
          <Benefit title={titulo} colorDetail={colorDetail}/>
          <CardBotao />
        </TextButtoContainer>
    </Article>

  )
}

export default Cards