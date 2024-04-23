import Cards from "./components/Cards/Card"
import styled from "styled-components";
import colors from "./colors";

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  padding: 10px;
  gap: 10px;
`


function App() {

  return (
    <MainContainer>
      <Cards 
            colorPrimary={colors.colorPrimaryOne}
            colorSecundary={colors.colorSecondaryOne}
            colorDetail={colors.colorDetailOne}
            titulo={'Econômico'}
            texto={"Descubra o melhor custo-benefício com nosso Plano Econômico. Uma opção acessível para viagens incríveis"}/>
      <Cards 
            colorPrimary={colors.colorPrimaryTwo}
            colorSecundary={colors.colorSecondaryTwo}
            colorDetail={colors.colorDetailTwo}
            titulo={'Padrão'}
            texto={"Explore o luxo em cada detalhe com nosso Plano Padrão. Uma experiência refinada que cabe no seu orçamento."}/>
      <Cards 
            colorPrimary={colors.colorPrimaryThree}
            colorSecundary={colors.colorSecondaryThree}
            colorDetail={colors.colorDetailThree} 
            titulo={'Delux'}
            texto={"Desfrute da elegância e do conforto incomparáveis do nosso pacote Deluxe. Uma experiência de viagem que redefine o luxo."}/>


    </MainContainer>
  )
}

export default App
