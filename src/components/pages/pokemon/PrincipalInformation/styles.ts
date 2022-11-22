import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  padding: 20px;
  border: 2px solid var(--P1B);
  border-radius: var(--radius1);
  box-shadow: var(--boxShadow);
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .divMobile {
    display: flex;
    flex: 3;
    justify-content: flex-end;
    align-items: flex-end;

    .pokemonInfos {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 10px;
      .pokemonTypeData {
        font-size: 18px;
        font-weight: 700;
      }
      .pokemonTypeValue {
        font-size: 18px;
        font-weight: 400;
        color: var(--P1C);
      }
    }
  }
  .pokemonInfos {
    flex: 3;
    display: flex;
    align-items: center;
    gap: 10px;
    .pokemonTypeData {
      font-size: 18px;
      font-weight: 700;
    }
    .pokemonTypeValue {
      font-size: 18px;
      font-weight: 400;
      color: var(--P1C);
    }
  }
  @media(max-width: 800px){
    height: 140px;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    .divMobile{
      flex: 1;
      width: 100%;
    }
    .pokemonInfos{
      flex: 1;
    }
  }
`;
