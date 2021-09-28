import styled from 'styled-components'

export const Container = styled.aside`
  width: 61.3125rem;
  background: var(--background-content);

  div.content {
    max-width: 90%;
    padding: 0 2rem;
    margin: 0 auto;
    margin-top: 1rem;
  }

  /** Mobile */
  @media (width: 375px) {
    width: 375px;

    div.content {
      padding: 0 2rem;
      margin: 0 auto;
      margin-top: 1rem;
      display: grid;
      width: 375px;
    }
  }
`

export const BtnTemperature = styled.div`
  /** Inicio Mobile */

  @media (width: 375px) {
    display: none;
    position: absolute;
    visibility: hidden;
    overflow-y: hidden;
  }
  /** Final Mobile */

  display: flex;
  justify-content: end;
  margin-bottom: 1rem;

  a.celsius {
    display: inline-block;
    background: var(--text-title);
    text-decoration: none;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 1rem;
    margin-right: 12px;
    transition: filter 0.5s;

    &:hover {
      filter: brightness(0.7);
    }

    h1 {
      font-weight: 700;
      font-size: 1.25rem;
      color: #110e3c;
      text-align: center;
      line-height: 1.8rem;
    }
  }

  a.fahrenheit {
    display: inline-block;
    background: var(--text-title2);
    text-decoration: none;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 1rem;
    transition: filter 0.5s;

    &:hover {
      filter: brightness(0.7);
    }

    h1 {
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--text-title);
      text-align: center;
      line-height: 1.8rem;
    }
  }
`

export const ContentClimateDays = styled.div`
  display: grid;
  gap: 1.625rem;
  grid-template-columns: repeat(5, 1fr);

  @media (width: 375px) {
    grid-template-columns: repeat(2, 1fr);
    width: 120px;
    height: 177px;
  }
`

export const Highlights = styled.div`
  margin-top: 1rem;

  h1 {
    color: var(--text-title);
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  div.principal {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0.5rem;
  }

  /** Mobile */

  @media (width: 375px) {
    margin-top: 35rem;
    margin-bottom: 1rem;
    div.principal {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(2, 1fr);
      align-items: center;
      justify-content: center;

      gap: 0.5rem;
    }
  }
`
