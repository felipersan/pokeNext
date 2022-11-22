import styled from "styled-components";

export const Container = styled.div`
position: relative;
display: flex;
justify-content: flex-end;
width: clamp(180px, 40%, 500px);
.searchIconForInput{
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 10px;
    margin-left: 11px;
}
`

export const Input = styled.input`
background-color: var(--bgCard);
height: 40px;
padding: 0px 15px 0px 40px;
outline: none;
border: 1px solid var(--P1B);
border-radius: var(--radius1);
width: 100%;
/* width: 400px; */
`