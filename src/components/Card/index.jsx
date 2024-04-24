import Benefit from "../Benefit"
import { Button } from "../Button"
import { Text } from "../Texto/Text"
import { Title } from "../Title"
import { Article, TextButtoContainer, TitleIcon, AviaoImg } from "./styled"



const Card = ({colorPrimary, colorSecundary, colorDetail ,titulo, texto}) =>{


  return(
    <Article colorPrimary={colorPrimary}>
        <TitleIcon>
          <AviaoImg />
          <Title>
            {titulo}
          </Title>
        </TitleIcon>
        <TextButtoContainer colorSecundary={colorSecundary}>
          <Text>
            {texto}
          </Text>
          <Benefit title={titulo} colorDetail={colorDetail}/>
          <Button>
            Compre agora
          </Button>
        </TextButtoContainer>
    </Article>

  )
}

export default Card