import pokeAPI from '../pokeAPI'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { getPokemon } from '../../interfaces/API/GET'

class pokemonClass {
  async getPokemonWithPagination(offset: number) {
    try {
      const data = pokeAPI.get<getPokemon | null>(
        `pokemon?limit=50&offset=${offset}`
      )

      if (await data) return data
    } catch (error) {
      console.log('erro ao pegar os pokemons genéricos ===========>', error)
    }
  }

  async getCompletePokemon(name: string) {
    try {
      const data = pokeAPI.get<getPokemon>(`pokemon/${name}`)
      if (await data) return data
    } catch (error) {
      console.log('erro ao pegar pokemons completos ===========>', error)
    }
  }

  async getPokemonSpecies(id: string) {
    try {
      const data = pokeAPI.get(`pokemon-species/${id}`)
      if (await data) return data
    } catch (error) {
      console.log('erro ao pegar pokemons species ===========>', error)
    }
  }

  async getSearchPokemon(name: string) {
    try {
      const data: any = await pokeAPI.get(`pokemon/${name}`)

      return data
    } catch (error) {
      console.log('erro ao pegar pokemon página ===========>', error)
    }
  }

  async getEvolutionChain(id: string) {
    try {
      const data: any = await pokeAPI.get(`evolution-chain/${id}`)

      return data
    } catch (error) {
      console.log('erro ao pegar evolução ===========>', error)
    }
  }
}
export default new pokemonClass()
