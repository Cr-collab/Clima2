import { Container } from './style'
import { api } from '../../services/api'


import locale from '../../assets/locale.svg'

import { translateClimate } from '../utils/traslateClimate'
import { translateFahrenheit } from '../utils/translateFahrenheit '


import { useContext} from 'react'
import { ClimatesContext } from '../../Context'

export function InitialSidebar({search, setSearch, res, req}){

      const {setDataWeather, setLocation, fahrenheit} = useContext(ClimatesContext)
    /** setDataWeather: para setar a localização do usuario;
     *  setLocation: é onde fica o estado se o usario aceito a aplicação pegar a localização dele.
     *  fahrenheit: onde verifica se esta setado para conversão do fahrenheit
     * 
     */

     function handleModifySearch(){
         if(search){
             setSearch(false)
         }else{
             setSearch(true)
         }
     }



     function handleReturLocale(){
            navigator.geolocation.getCurrentPosition((position) => {
                getWeather(position.coords.latitude, position.coords.longitude)
                setLocation(true)
            })
          let getWeather = async (lat, long) => {
            /** pega o dados da api  */ 
              let res = await api.get(`search/?lattlong=${lat},${long}`)
      
              let req = await api.get(`${res.data[0].woeid}/`)     
              setDataWeather(req.data)
          }
     }


    return(
    <Container>
           <div className="search">
                <button onClick={handleModifySearch}> procurar lugares </button>
                {/* vai abrir o componente de procurar a temperaturas de outro local
                    baseada na informação passada pelo usuarios
                */}
                <a onClick={handleReturLocale}> <img src={locale} alt="localização" /></a>  
                {/* esse butão seta o local original do usario */}
           </div>
                {/* Renderiza a temperatura do  dia atual */}
                <div  className="image"> 
                    <img src={`https://www.metaweather.com/static/img/weather/${res.weather_state_abbr}.svg`} alt="" />
                    <h1>
                    {translateFahrenheit(Math.round(res.the_temp), fahrenheit).replace('°c', "").replace('°f', "")}<span>{fahrenheit ? '°f' : '°c'}</span>
                    </h1>
                    <h2>{translateClimate(res.weather_state_name)}</h2>


                    <p> Hoje . {new Date(res.created).toLocaleDateString('pt-BR', { year: "numeric",
                     month: "short", day: "numeric" })} </p>
                    <p>{req.title}</p>
                </div>
                <div>

        </div>
    </Container>
    )
}