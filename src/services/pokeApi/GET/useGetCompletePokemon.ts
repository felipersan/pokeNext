import { useQuery } from 'react-query'
import { getPokemon } from '../../../interfaces/API/GET'
import pokemonClass from '../index'

export const useGetCompletePokemon = (name: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['getPokemonWithPagination', name],
    async () => {
      return await pokemonClass.getCompletePokemon(name)
    }
  )
  return {
    completePokemon: data as any,
    isLoadingReactions: isLoading as boolean,
    isErrorReactions: isError as boolean,
    isSuccessReactions: isSuccess as boolean | number
  }
}
