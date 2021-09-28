import axios from 'axios'

export const api = axios.create({
  baseURL:
    'https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/'
  // https://api.allorigins.win/raw?url=
  //  https://cors-anywhere.herokuapp.com/
})
