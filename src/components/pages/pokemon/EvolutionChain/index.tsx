import { useEffect, useState } from 'react'
import { useGetEvolutionChain } from '../../../../services/pokeApi/GET/useGetEvolutionChain'
import EvolutionChainCard from './EvolutionChainCard'
import { Container } from './styles'

interface props {
  pokemon: any
  species: any
}

export default function EvolutionChain({ pokemon, species }: props) {
  const [pokemonChain, setPokemonChain] = useState<string>('1')
  const [pokemonsEvolution, setPokemonsEvolution] = useState<Array<any>>([])

  const { completeEvolutionChain } = useGetEvolutionChain(pokemonChain)

  function handlePokemonChain() {
    const pokemonChainSplit = species?.evolution_chain.url.split('/')
    setPokemonChain(pokemonChainSplit[6])
  }

  useEffect(() => {
    handlePokemonChain()
  }, [species])

  useEffect(() => {
    if (pokemonsEvolution) {
      setPokemonsEvolution([
        completeEvolutionChain?.data?.chain?.species?.name,
        completeEvolutionChain?.data?.chain?.evolves_to[0]?.species?.name,
        completeEvolutionChain?.data?.chain?.evolves_to[0]?.evolves_to[0]
          ?.species?.name
      ])
    }
  }, [completeEvolutionChain])

  return (
    <Container>
      {pokemonsEvolution.map((row: any) => {
        if (row !== undefined)
          return <EvolutionChainCard name={row} key={row} />
      })}
    </Container>
  )
}
