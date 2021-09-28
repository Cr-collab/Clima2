import styled from 'styled-components'

export const Container = styled.div`
  background: var(--background-sidebar);
  color: var(--text-title);
  width: 7.5rem;
  height: 11.0625rem;
  display: grid;
  align-items: center;
  justify-content: center;

  p {
    font-weight: 500;
    font-size: 1rem;
    justify-self: center;

    span + span {
      display: inline-block;
      margin-left: 1rem;
    }
  }

  &:hover {
    filter: brightness(0.8);
  }

  img {
    width: 3.6525rem;
    height: 3.875rem;
    justify-self: center;
  }

  p {
    font-weight: 500;
    font-size: 1rem;
    justify-self: center;

    span + span {
      display: inline-block;
      margin-left: 1rem;
    }
  }

  /* Mobile */
  @media (width: 375px) {
    width: 120px;
    height: 177px;

    &:hover {
      filter: brightness(0.8);
    }

    img {
      width: 3.5575rem;
      height: 3.875rem;
      justify-self: center;
    }
  }
`
