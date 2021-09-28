import styled from 'styled-components'

export const Container = styled.div`
  background: var(--background-sidebar);
  color: var(--text-title);
  width: 20.5rem;

  p {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
    margin-top: 1.375;
  }

  h1.high {
    font-weight: 700;
    text-align: center;
    font-size: 3rem;

    span {
      font-weight: 500;
      font-size: 2rem;
    }
  }

  div {
    position: relative;
    left: 3.5rem;

    span {
      display: inline-block;
    }
    progress {
      align-self: center;
      justify-self: center;
    }
  }

  @media (width: 375px) {
    width: 310px;
    align-self: center;
    justify-self: center;
    margin-left: -1rem;

    padding-bottom: 1rem;

    p {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      font-weight: 500;
      font-size: 1rem;
      text-align: center;
      margin-top: 1.375;
    }

    h1 {
      font-weight: 700;
      text-align: center;
      font-size: 4rem;

      span {
        font-weight: 500;
        font-size: 2.16rem;
      }
    }

    div {
      position: relative;
      left: 3.5rem;

      span {
        display: inline-block;
      }
      progress {
        align-self: center;
        justify-self: center;
      }
    }
  }
`
