import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(150px, 1.5fr));
  gap: 20px;
`
