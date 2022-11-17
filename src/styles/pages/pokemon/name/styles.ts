import styled from "styled-components";

export const Container = styled.div`
padding: 20px;
.letSidePokemonDetails{
    padding: 20px;
    border: 2px solid var(--P1B);
    border-radius: var(--radius2);
    box-shadow: var(--boxShadow);
    width: 35%;
    .cardImagePokemon{
        .pokemonTypes{
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            gap: 10px;
            .cardTypePokemon{
                padding: 10px 20px;
                background-color: var(--P1A);
                border-radius: var(--radius1);
                color: var(--bgCard);
                font-weight: 700;
            }
        }
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        .PokemonName{
            font-size: 32px;
            font-weight: 700;
        }
    }
}
`