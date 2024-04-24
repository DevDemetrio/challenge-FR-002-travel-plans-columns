import Benefit from "../Benefit"
import { Button } from "../Button"

import CardTexto from "../CardTexto/CardTexto"
import CardTitulo from "../CardTitulo/CardTitulo"
import { Article, TextButtoContainer, TitleIcon, AviaoImg } from "./styled"



const Card = ({colorPrimary, colorSecundary, colorDetail ,titulo, texto}) =>{


  return(
    <Article colorPrimary={colorPrimary}>
        <TitleIcon>
          <AviaoImg />
          <CardTitulo titulo={titulo}/>
        </TitleIcon>
        <TextButtoContainer colorSecundary={colorSecundary}>
          <CardTexto texto={texto}/>
          <Benefit title={titulo} colorDetail={colorDetail}/>
          <Button>
            Compre agora
          </Button>
        </TextButtoContainer>
    </Article>

  )
}

export default Card