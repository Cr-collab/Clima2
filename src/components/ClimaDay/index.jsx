import { useContext, useState } from "react";

//  função para conversão para fahrenheit
import { translateFahrenheit } from "../utils/translateFahrenheit ";

// é api context
import { ClimatesContext } from "../../Context";

// estilização 
import { Container } from "./style";


export function ClimaDay({element, indice}) {
      /** Esse Componente ele é os cards com proximos dias com a temperatura maxima e minma do clima */

     if(indice === 1){
       /** aqui estou verifica se o indice do map  que esta renderizando as 
        *  informação do array das temperaturas  é igual a um  para modificar 
        *  para o valor da  variavel dataFinal para amanhã na primeira passagem 
         */
      var dataFinal = "Amanhã"
     }else{
       /** se não ele vai utilizar o valor da data passada  para da final */
       var dataFinal = new Date(`${element.applicable_date} 21:01:28 GMT-0300`)
     }

    const {fahrenheit} = useContext(ClimatesContext)
    /** aqui estou pegando o valor de  fahrenheit para condicionar a mudança */



    const [semana , setSemana] = useState([
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira", 
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado"
       ])
       /** aqui crie um array de dias da semana para realizar  um retorno dependendo do
        *  resultado que getDay assim sempre vai renderizar uma opção difirente 
         */

    return(
       
    <Container>
        <p>{dataFinal === "Amanhã" ? dataFinal : semana[dataFinal.getDay()]}</p>
        {/** aqui estou verificando se a data final  
         *  é igual o valor Amanhã se for ele vai retornar a propria variavel dataFinal
         * se não vou  pegar o array das dias da semana e vou passar a indice baseado na dataFinal
         *  que a função get day vai trabalhar para ver o dia da semana em numeros */}

        <img src={`https://www.metaweather.com/static/img/weather/${element.weather_state_abbr}.svg`} alt="" />

        <p>
          <span>{translateFahrenheit(Math.round(element.max_temp), fahrenheit)}</span>
          {/* Função translate  fahrenheit esta pegando o valor da temperatura  e uma variavel 
          para  essa função boolean  se a pessoa modificala ela true ela vai retornar o fafahrenheit
          e se ela estiver true ela vai retornar o celsius 
           */}
          <span>{translateFahrenheit(Math.round(element.min_temp) , fahrenheit) }</span>
        </p>

      </Container>
    )
}