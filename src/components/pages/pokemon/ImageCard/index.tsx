import Image from "next/image";
import { useEffect } from "react";
import { Container } from "./styles";

interface props {
  pokemon: any;
}

export default function ImageCard({ pokemon }: props) {
  let width = 0
  if (typeof window !== 'undefined') {
    width = window.innerWidth
  }

  function pokemonPhotoSize(pageWidth:number){
    if (pageWidth < 800) return 300
    else return 400
  }

  return (
    <Container>
      <div className="cardImagePokemon">
        <div className="pokemonTypes">
          {pokemon?.types.map((row: any, key: number) => {
            return (
              <span key={key} className="cardTypePokemon">
                {row.type.name.toUpperCase()}
              </span>
            );
          })}
        </div>
        {pokemon?.sprites?.other?.dream_world?.front_default && (
          <Image
            alt={`imagem do pokemon ${pokemon?.name}`}
            src={pokemon?.sprites?.other?.dream_world?.front_default}
            width={pokemonPhotoSize(width)}
            height={pokemonPhotoSize(width)}
          />
        )}
        <h2 className="PokemonName">{pokemon?.name.toUpperCase()}</h2>
      </div>
    </Container>
  );
}
