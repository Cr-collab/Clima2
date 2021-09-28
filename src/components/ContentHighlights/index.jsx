import { Container } from "./style"
import { FiArrowUp } from "react-icons/fi";

import {TraslateCompass} from "../utils/TraslateCompass"

export function ContentHighlights({name, value ,type, vento , wind_direction}){
   /**  name :  de forma estatica como são quatro componentes,
    *   value : o valor das informações ,
    *   type : aqui vou passar o tipo por 
    *   dois cards ter mais informações com
    *   vento , wind_direction : são para primeiro componente para 
    *    adicionalo a ele 
    * 
    */
   console.log(vento)


    return(
        <Container>
            <p>{name}</p>
            {/* Eu passo nome*/}
            <h1 className="high">{Math.round(value)}<span>{type}</span></h1>

                {
                    //  aqui to verifiacando o type para poder renderizar component 
                    //  conteudos  diferentes
                type === "mph" ? 
                    (
                        <>
                        <p> {TraslateCompass(vento)} <FiArrowUp className='icone' size="17" style={{transform:`rotate(${wind_direction}deg)`}}  /></p> 
                        </>
                    )  :  type === '%' ? (
                        <>
                        <div>
                        <span>0%</span> <progress value={Math.round(value)} max="100" ></progress> <span>100%</span>
                        </div>      
                        </>
                    ) : ""
            }
      </Container>
    )
}