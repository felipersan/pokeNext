import { useQuery } from 'react-query'
import pokemonClass from '../index'

export const useGetSearchPokemon = (name: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['getSearchPokemon', name],
    async () => {
      return await pokemonClass.getSearchPokemon(name)
    }
  )
  return {
    searchPokemon: data as any,
    isLoadingReactions: isLoading as boolean,
    isErrorReactions: isError as boolean,
    isSuccessReactions: isSuccess as boolean | number
  }
}
