import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--bg);
  .infinite-scroll-component {
    padding: 20px;
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 10px;
  }
`
