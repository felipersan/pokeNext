import Image from "next/image";
import Link from "next/link";
import { useGetCompletePokemon } from "../../../../../services/pokeApi/GET/useGetCompletePokemon";
import { Container } from "./styles";

interface props {
  name: string;
}

export default function EvolutionChainCard({ name }: props) {
  const { completePokemon } = useGetCompletePokemon(name);
  return (
    <Container>
      <Link href={`/pokemon/${name}`} className={"linkToPokemon"}>
        {completePokemon?.data.sprites?.front_default && (
          <Image
            alt={`imagem do pokemon ${name}`}
            src={completePokemon?.data.sprites?.front_default}
            height={100}
            width={100}
          />
        )}
        <h3 className="pokemonName">
          {completePokemon?.data?.name?.toUpperCase()}
        </h3>
      </Link>
    </Container>
  );
}
