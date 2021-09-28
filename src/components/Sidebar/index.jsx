import { useContext, useState } from 'react'

import {Container} from './style'

import { OpenSearchBar } from '../OpenSearchBar'
import { InitialSidebar } from '../InitialSidebar'

import { ClimatesContext } from '../../Context'

export function Sidebar(props){

  const [search, setSearch] = useState(false)
  // aqui garda se o componente de mudança de local  esta aberto ou não ;

    const {dataWeather} = useContext(ClimatesContext)
    // pegando o objeto com as informções do local que estou ou local selecionado pelo usario

    const res = dataWeather.consolidated_weather[0] 
    // pegando a primira posição do array com o clima do dia atual


  return(
        <Container>
          <div className="content">

            {
              search ?
              <OpenSearchBar setSearch={setSearch}/>:
              <InitialSidebar search={search} setSearch={setSearch} res={res} req={dataWeather}/>

            }

          </div>
        </Container>
  )
}
