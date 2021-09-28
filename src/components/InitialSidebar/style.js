import styled from 'styled-components'

export const Container = styled.div`
  div.search {
    margin-top: 42px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    button {
      width: 10rem;
      height: 2.5rem;
      background: var(--btn-one);
      color: var(--text-title);
      outline: none;
      border: none;
      margin-right: 4rem;
      transition: filter 0.5s;

      &:hover {
        filter: brightness(0.8);
      }
    }

    a {
      margin-left: auto;
      transition: filter 0.5s;

      &:hover {
        filter: brightness(0.8);
      }
    }

    a img {
      background: var(--text-title);
      border-radius: 22px;
    }
  }

  div.image {
    display: grid;
    align-items: center;
    justify-content: center;

    img {
      width: 12.625rem;
      height: 14.625rem;
    }

    h1 {
      color: var(--text-title);
      font-size: 5rem;
      font-weight: 500;
      text-align: center;

      span {
        font-size: 3rem;
        font-weight: 500;
        color: var(--text-title2);
      }
    }

    h2 {
      font-weight: 600;
      margin-top: 1rem;
      font-size: 2.25rem;
      color: var(--text-title2);
      text-align: center;
    }

    p {
      font-weight: 600;
      margin-top: 1rem;
      font-size: 1.25rem;
      color: var(--text-title2);
      text-align: center;
    }
  }
`
