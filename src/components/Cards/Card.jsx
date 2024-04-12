import CardBotao from "../CardBotao/CardBotao"
import CardTexto from "../CardTexto/CardTexto"
import CardTitulo from "../CardTitulo/CardTitulo"
import { Aside } from "./Card.styled"
import { AviaoImg } from "./Imagen.styled"

const Cards = ({cardColor, titulo, texto}) =>{
  return(
    <Aside cardColor={cardColor}>
        <AviaoImg />
        <CardTitulo titulo={titulo}/>
        <CardTexto texto={texto}/>
        <CardBotao />
    </Aside>

  )
}

export default Cards