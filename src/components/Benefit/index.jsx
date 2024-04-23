import {categorias} from '../../benefits.json'
import {BenefitContainer, BenefitListContainer} from '../Benefit/styled'

const Benefit = ({title, colorDetail}) => {
  return(
    <BenefitContainer >
      {
        categorias.map((categoria) =>{
          if(title === categoria.nome){
          return(
          <BenefitListContainer key={categoria.nome} colorDetail={colorDetail} >
              {categoria.caracteristicas.map((caracteristica, caracteristicasI) =>{
                return<li key={caracteristicasI}>{caracteristica}</li>
          
              })}
          </BenefitListContainer>
          )
        }else{
          return null
        }
        })
        
      }
    </BenefitContainer>
  )
}

export default Benefit