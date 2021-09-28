import styled from 'styled-components'

export const Container = styled.aside`
  width: 28.6875rem;
  height: 100vh;
  background: var(--background-sidebar);
  grid-area: sidebar;
  
  div.content {
    max-width: 23.125rem;
    padding:  0 1rem;
    margin: 0 auto;
    margin-top:1rem ;
    height: 90vh;


    }
  
  /** Mobile */

  @media (width: 375px) {   
    width: 375px;
 }

 

`
