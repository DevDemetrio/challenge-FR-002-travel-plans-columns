import CardBotao from "../CardBotao/CardBotao"
import CardTexto from "../CardTexto/CardTexto"
import CardTitulo from "../CardTitulo/CardTitulo"
import { Article, TextButtoContainer, TitleIcon } from "./Card.styled"
import { AviaoImg } from "./Imagen.styled"

const Cards = ({cardColor, titulo, texto}) =>{


  return(
    <Article cardColor={cardColor}>
        <TitleIcon>
          <AviaoImg />
          <CardTitulo titulo={titulo}/>
        </TitleIcon>
        <TextButtoContainer>
          <CardTexto texto={texto}/>
          <CardBotao />
        </TextButtoContainer>
    </Article>

  )
}

export default Cards