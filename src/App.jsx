import Cards from "./components/Cards/Card"
import styled from "styled-components";

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
            cardColor={"#E38826"} 
            titulo={'Econômico'}
            texto={"Descubra o melhor custo-benefício com nosso Plano Econômico. Uma opção acessível para viagens incríveis"}/>
      <Cards 
            cardColor={"#027e86"} 
            titulo={'Padrão'}
            texto={"Explore o luxo em cada detalhe com nosso Plano Padrão. Uma experiência refinada que cabe no seu orçamento."}/>
      <Cards 
            cardColor={"#004241"} 
            titulo={'Delux'}
            texto={"Desfrute da elegância e do conforto incomparáveis do nosso pacote  Deluxe. Uma experiência de viagem que redefine o luxo e a sofisticação"}/>
    </MainContainer>
  )
}

export default App
