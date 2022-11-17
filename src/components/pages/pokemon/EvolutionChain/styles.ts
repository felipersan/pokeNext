import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 10px;    
`;
