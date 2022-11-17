import { useQuery } from 'react-query'
import { getPokemon } from '../../../interfaces/API/GET'
import pokemonClass from '../index'

export const useGetEvolutionChain = (id: string) => {
  const { data, isLoading, isError, isSuccess } = useQuery(
    ['getEvolutionChain', id],
    async () => {
      return await pokemonClass.getEvolutionChain(id)
    }
  )
  return {
    completeEvolutionChain: data as any,
    isLoadingReactions: isLoading as boolean,
    isErrorReactions: isError as boolean,
    isSuccessReactions: isSuccess as boolean | number
  }
}
