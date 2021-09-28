import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 
  :root{
     --background-content: #100E1D;
     --background-sidebar: #1e213a;
     --text-title: #e7e7eb;
     --text-title2: #A09FB1;
     --btn-one:  #6e707a;
     --btn-second:  #3C47E9;
     --btn-firehight: #585676;
  }

  html{ 
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
    @media (max-width:720px){
        font-size: 87.5%;
    }

    body , textarea , input , button{
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{ 
    cursor: pointer;
   }
}
  
`
