import styled from "styled-components";

export const Container = styled.div`
background-color: var(--bg);
padding: 10px 30px;
box-shadow: var(--boxShadow);
display: flex;
justify-content: space-around;
.leftSideHeader{
    display: flex;
    align-items: center;
    gap: 20px;
    border: none;
    background-color: transparent;
    text-decoration: none;
    
    .pokemonLogoImage{
        height: 45px;
        width: 45px;
    }
    .titleAplication{
        font-size: 32px;
        line-height: 40px;
        font-weight: 700;
        color: var(--P1A)
    }
}
.containerInputDefault{
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}
@media(max-width: 500px){
    justify-content: unset;
    gap: 20px;
    .leftSideHeader{
        display: flex;
        gap: 14px;
        .pokemonLogoImage{
            height: 22px;
            width: 22px;
        }
        .titleAplication{
            font-size: 18px;
            line-height: 40px;
        }
    }
}
`