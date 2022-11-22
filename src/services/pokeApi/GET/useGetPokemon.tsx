import { useQuery } from 'react-query'
import { getPokemon } from '../../../interfaces/API/GET'
import pokemonClass from '../index'

export const useGetPokemon = (offset: number, limit:number) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['getPokemonWithPagination', offset],
    async () => {
      return await pokemonClass.getPokemonWithPagination(offset, limit)
    }
  )
  return {
    pokemonsWithPagination: data as any,
    isLoadingReactions: isLoading as boolean,
    isErrorReactions: isError as boolean,
    isSuccessReactions: isSuccess as boolean | number
  }
}
