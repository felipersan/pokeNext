import Image from 'next/image'
import { Container } from './styles'

interface props {
  pokemon: any
}

export default function ImageCard({ pokemon }: props) {
  return (
    <Container>
      <div className="cardImagePokemon">
        <div className="pokemonTypes">
          {pokemon?.types.map((row: any, key: number) => {
            return (
              <span key={key} className="cardTypePokemon">
                {row.type.name.toUpperCase()}
              </span>
            )
          })}
        </div>
        <Image
          alt={`imagem do pokemon ${pokemon?.name}`}
          src={pokemon.sprites.other.dream_world.front_default}
          width={400}
          height={400}
        />
        <h2 className="PokemonName">{pokemon?.name.toUpperCase()}</h2>
      </div>
    </Container>
  )
}
