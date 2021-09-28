import styled from 'styled-components'


export const Container = styled.button`

    display: block;
    font-weight: 500;
    color: var(--text-title);
    transition: border 0.4s;
    margin-top:  1rem;

    text-align: start;
    padding-left: 1rem  ;
   

    margin-top: 2rem;
    grid-column: 1 / 3;

    height:  4rem;
    
    border: 0;
    outline:  none;
    background:  var(--background-sidebar);

    &:hover {
      border: 1px solid var(--text-title);
      cursor:  pointer;
    }
  
`
