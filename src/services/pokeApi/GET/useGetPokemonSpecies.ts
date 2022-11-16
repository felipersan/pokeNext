import { useQuery } from 'react-query'
import { getPokemon } from '../../../interfaces/API/GET'
import pokemonClass from '../index'

export const useGetPokemonSpecies = (id: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['getPokemonSpecies', id],
    async () => {
      return await pokemonClass.getPokemonSpecies(id)
    }
  )
  return {
    pokemonSpecies: data as any,
    isLoadingReactions: isLoading as boolean,
    isErrorReactions: isError as boolean,
    isSuccessReactions: isSuccess as boolean | number
  }
}
