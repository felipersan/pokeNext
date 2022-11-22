import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--bg);
    padding: 20px;
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 10px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;
