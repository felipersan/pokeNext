import styled from "styled-components";

export const Container = styled.div`
background-color: var(--bg);
padding: 10px 30px;
box-shadow: var(--boxShadow);
display: flex;
justify-content: space-between;
align-items: center;
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
`