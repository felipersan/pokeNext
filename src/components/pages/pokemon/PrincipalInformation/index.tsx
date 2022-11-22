import {
  BalanceIcon,
  ScaleIcon,
} from "../../../../../public/assets/images/icons";
import { Container } from "./styles";

interface props {
  pokemon: any;
}

export default function PrincipalInformation({ pokemon }: props) {
  return (
    <Container>
      <div className="divMobile">
        <span className="pokemonInfos">
          <BalanceIcon size={22} />
          <p className="pokemonTypeData">Peso:</p>
          <p className="pokemonTypeValue">{pokemon.weight / 10} Kg</p>
        </span>
        <span className="pokemonInfos">
          <ScaleIcon size={22} />
          <p className="pokemonTypeData">Altura:</p>
          <p className="pokemonTypeValue">{pokemon.height / 10} m</p>
        </span>
      </div>

      <span className="pokemonInfos">
        <p className="pokemonTypeData">Movimentos:</p>
        {pokemon?.moves.map((row: any, key: number) => {
          console.log(row.move.name);
          if (key < 2) {
            return (
              <p key={key} className="pokemonTypeValue">
                {row?.move?.name}
              </p>
            );
          }
        })}
      </span>
    </Container>
  );
}
