import styled, { css } from 'styled-components'

interface pokemonProps{
    borderColor: string
}

export const Container = styled.button<pokemonProps>`
background-color: var(--bgCard);
cursor: pointer;
height: 150px;
border-radius: 10px;
border: 2px solid ${({borderColor})=>borderColor ?? '#909090'};
position: relative;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.3s;
&:hover{
    transition: all 0.3s;
    opacity: 0.8;
    transform: scale(1.05);
}
.pokemonImageProfile{
    margin-bottom: 50px;
}
.nameContainer{
    position: absolute;
    width: 100%;
    height: 50px;
    background-color : ${({borderColor})=> borderColor ?? '#909090'};
    bottom: 0;
    border-radius: 0 0 8px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    .pokemonName{
        font-size: 18px;
        color: #fff;
        font-weight: bold;
    }
}
`
