// Componente dos 5 dias de card
import { ClimaDay } from '../ClimaDay'

// Componente informações do dia atual
import { ContentHighlights } from '../ContentHighlights'

// Importações para ter acesso a informções da context api
import { useContext } from 'react'
import { ClimatesContext } from '../../Context'

// Estilização
import {
   Container,
   BtnTemperature,
   ContentClimateDays,
   Highlights
  } from './style'



export function Content(props){
  

      const {dataWeather, setFahrenheit} = useContext(ClimatesContext)
      console.log(dataWeather)
      /* pegando informações especificas da contexApi
            dataWheater é um objeto que nos dão as informações da api
            setFahrenheit é estado que seta o valor resposavel pela
            mudança de celsius para fahrenheit
         */
  

      const res = dataWeather.consolidated_weather[0]
      //   pegando o primeira posição do array  dos dias para colocar as informações na sidebar;

      const resArrayComplete =  dataWeather.consolidated_weather
      // pegqando o array completo dos dia para passar para os cards do dia  


      // funções que modificam o valor do estado de Fahrenheit para true o false 
         function handleToggleC(){
               setFahrenheit(false)
         }
         function handleToggleF(){
            setFahrenheit(true)
         }

 

  return(
        <Container>
          
          <div className="content">
             {/*  botões de celsius e fahrenheit */}
             <BtnTemperature>
                <a onClick={handleToggleC}  className='celsius'> <h1>°C</h1></a> 
                <a  onClick={handleToggleF} className='fahrenheit'> <h1>°F</h1></a>
              </BtnTemperature>


              <ContentClimateDays>
                 {
                  // aqui estou fazendo um mapeamento do array de dias para passar para o component 
                  // de cards dos proximos dias
                   resArrayComplete.map((element, index ) => {
                   if(index  > 0){
                     //verifico se index é maior que zero para não retornar o valor do dia atual
                      return <ClimaDay element={element} indice={index}/>
                   }})
                 }
              </ContentClimateDays>

              <Highlights>
                 {/* componentes que informão algumas informções do dia atual  */}
                   <h1>Destaques de hoje</h1>
                   <div className="principal">
                           <ContentHighlights 
                           name={"Status do Vento"} 
                           value={res.wind_speed}  
                           vento={res.wind_direction_compass} 
                           wind_direction={res.wind_direction}
                           type={"mph"} />


                           <ContentHighlights 
                           name={"Umidade"}  
                           value={res.humidity}
                           type={"%"}/>

                           <ContentHighlights 
                           name={"Visibilidade"} 
                           value={res.visibility} 
                           type={"milhas"}/>


                           <ContentHighlights 
                           name={"Pressão do ar"} 
                           value={res.air_pressure} 
                           type={"mb"}/>
                   </div>       
              </Highlights>
                
          </div>
        </Container>
  )
}

