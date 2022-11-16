import { useEffect, useState } from 'react'
import { completePokemon, pokemonGeneric } from '../../interfaces/API/GET'
import { useGetCompletePokemon } from '../../services/pokeApi/GET/useGetCompletePokemon'

import * as S from './styles'

interface pokemon {
  data: pokemonGeneric
}

export default function CardPokemon({ data }: pokemon) {
  const [completePokemonforCard, setCompletePokemonforCard] =
    useState<completePokemon | null>(null)

  const { completePokemon } = useGetCompletePokemon(data?.name)

  useEffect(() => {
    if (completePokemon) {
      addCompletePokemon(completePokemon.data)
    }
  }, [completePokemon])

  function addCompletePokemon(completePokemon: completePokemon) {
    setCompletePokemonforCard(completePokemon)
  }

  return (
    <>
      <S.Container>{completePokemonforCard?.name}</S.Container>
    </>
  )
}
