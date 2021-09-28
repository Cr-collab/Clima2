
import {useEffect, useState} from 'react'


import { createContext } from 'react';
import { initialState } from '../data/data';


import {api} from '../services/api'

import { toast } from "react-toastify";


export const ClimatesContext = createContext({})


export function ClimatesProvider({children}){

   const [location, setLocation] = useState(false)
  /**  verifacção da localização do usuarios  */

  const [dataWeather, setDataWeather] = useState(initialState)
  /** localidade mais proxima baseada na latitude e long */

  const [fahrenheit , setFahrenheit ] = useState(false)
  // garda se os valores estão em celsius ou não 


    useEffect(()=> {
      navigator.geolocation.getCurrentPosition((position) => {

          getWeather(position.coords.latitude, position.coords.longitude)
         

          setLocation(true)
      })
    }, []) 
    // aqui esta pegando a latitude e longitude se o usuario aceitar 
    

    let getWeather = async (lat, long) => {
      /** pega o dados da api  */ 
        let res = await api.get(`search/?lattlong=${lat},${long}`)

        let req = await api.get(`${res.data[0].woeid}/`)     
        setDataWeather(req.data)
    }
    // pega os dados da api 


    const [recuperationHisorySearch , setRecuperationHisorySearch] = useState(()=>{
       
      const historySearch2 = localStorage.getItem('@History:search');
  
      if (historySearch2) {
        return JSON.parse(historySearch2);
      }
      return [];
   
})

/** esse estado vai armazenar as pesquisas do usuario,
*   além disso esse estado ele esta verificando se o usuario ja pesquiso algo, estara salvo
*  no local storage e ja iniciar ele com resultado localtorage se não vai iniciar vazio
*/

  
  


  const searchLocalWeather = async (name) =>{
   try {
    let res = await api.get(`search/?query=${name}`)

    let req = await api.get(`${res.data[0].woeid}/`)   
    
    setDataWeather(req.data)

   } catch{

      toast.error("Cidade , Estado ou Países  informado são inexistentes! Tente Novamente")

      var array = localStorage.getItem('@History:search')
      var array1 = JSON.parse(array)
      array1.pop()

      localStorage.setItem('@History', JSON.stringify(array1))
      setRecuperationHisorySearch(array1)

      return false ;
   }
  } 

  // aqui estou fazendo arequisição da api baseada no nome do local passado pelo usuario

    return(
        <ClimatesContext.Provider  value={{dataWeather ,
         setDataWeather,
          setLocation, 
          searchLocalWeather,
           fahrenheit,
           setFahrenheit,
           setRecuperationHisorySearch,
           recuperationHisorySearch}}>
            {children}
        </ClimatesContext.Provider>
    )
}

