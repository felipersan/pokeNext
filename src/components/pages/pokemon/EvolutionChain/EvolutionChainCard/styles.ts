import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  border: 2px solid var(--P1B);
  border-radius: var(--radius1);
  box-shadow: var(--boxShadow);
  .linkToPokemon {
    text-decoration: none;
  }
  .pokemonName {
    font-size: 18px;
    font-weight: 700;
    color: var(--P1A);
  }
`
