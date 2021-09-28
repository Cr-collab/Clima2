import { useContext } from "react";
import { ClimatesContext } from "../../Context";
import { Container } from "./style";

export function HistorySearch({history, setSearch}) {
 
  const {searchLocalWeather}  = useContext(ClimatesContext)
  /* é a função que pega o dados com base na cidade ,
  estado ou país que usuario passar
  */
  
  function handleRePesquise(history){
          searchLocalWeather(history.target.innerText)
          setSearch(false)
  }

  return(
    <Container 
    onClick={(history)=>{ return handleRePesquise(history)}}> 
     {history}  
    </Container>
  )
}