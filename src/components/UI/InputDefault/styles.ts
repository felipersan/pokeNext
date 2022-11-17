import styled from "styled-components";

export const Container = styled.div`
position: relative;
width: 100%;
display: flex;
justify-content: flex-end;
`

export const Input = styled.input`
background-color: var(--bgCard);
height: 40px;
padding: 0px 10px;
outline: none;
border: 1px solid var(--P1B);
border-radius: var(--radius1);
width: clamp(150px, 40%, 500px);
/* width: 400px; */
`