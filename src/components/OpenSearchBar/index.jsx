import { useContext, useState } from "react";

import { ClimatesContext } from "../../Context";

import { Container } from "./style";
import { HistorySearch} from "../HistorySearch";

import {FiX} from 'react-icons/fi'


export function OpenSearchBar({setSearch}){

    const {searchLocalWeather, recuperationHisorySearch , setRecuperationHisorySearch} = useContext(ClimatesContext)
    /* é a função que pega o dados com base na cidade ,
       estado ou país que usuario passar
    */


    const [modifyLocale, setModifyLocale] = useState("")
    /** garda a informação que usuario passa no 
     * inpunt
    */
    


     
     var historySearch = [...recuperationHisorySearch]
     /** aqui to pegando o meu estado e espalhando ne uma variavel  */



    function handleWeatherCity(){ 
        searchLocalWeather(modifyLocale) 
  
        historySearch.push(modifyLocale)   
        setRecuperationHisorySearch(historySearch)
        
        localStorage.setItem('@History:search', JSON.stringify(historySearch))
        setModifyLocale("");
        setSearch(false)

    }
    /**  essa função handleWeatherCity vai setar o valor que usarios setou no inpunt 
     *   no dataWeather , para mudar os valores da aplicação com base na cidade passada ou 
     *   estado,  pais, etc.
     * 
     *   e além disso vai dar um push no array historySearch 
     * 
     *  e após isso vai setar no recuperationHisorySearch  para rederização do nosso componente 
     *  de garda o historico do usuario
     * 
     *  vamos setar no localStorage para que quando o usuario sair e entrar ficar salvo.
     */
    return(
        <Container>
               <button className="close" onClick={()=> setSearch(false)}> <FiX size="20"/> </button>
               <br />
            
              <input 
              type="text" 
              value={modifyLocale}
              onChange={(event)=>setModifyLocale(event.target.value) }
              placeholder="Pesquise sua localização" />  

              <button className="search" onClick={handleWeatherCity}>Pesquise</button>
   
                {
                    recuperationHisorySearch.map((history)=>{ 
                        return <HistorySearch history={history} setSearch={setSearch}/>
                    })
                }  
           
        </Container>
    )
}