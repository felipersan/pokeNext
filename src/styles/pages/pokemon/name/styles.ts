import styled from "styled-components";

export const Container = styled.div`
padding: 20px;
display: flex;
gap: 20px;
.letSidePokemonDetails{
    width: 35%;
    min-height: 100%;
}
.rightSidePokemonDetails{
    width: 65%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-height: calc(100vh - 140px);
    
    .bottomSizeWithChart{
        display: flex;
        gap: 20px;
        height: 100%;
        .radarChartPokemon{
            min-width: 60%;
            min-height: 100%;
        }
        .evolutionChain{
        }
    }
}
`