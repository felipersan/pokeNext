import pokeAPI from '../pokeAPI'
import { AxiosRequestConfig } from 'axios'
import { useRouter } from 'next/router'
import { getPokemon } from '../../interfaces/API/GET'

class pokemonClass {
  async getPokemonWithPagination(offset: number) {
    try {
      const data: getPokemon = await pokeAPI.get(
        `pokemon?limit=5&offset=${offset}`
      )
      return data
    } catch (error) {
      console.log('erro de autenticação ===========>', error)
    }
  }

  async getCompletePokemon(name: string) {
    try {
      const data: getPokemon = await pokeAPI.get(`pokemon/${name}`)
      return data
    } catch (error) {
      console.log('erro de autenticação ===========>', error)
    }
  }

  async getPokemonSpecies(id: string) {
    try {
      const data: any = await pokeAPI.get(`pokemon-species/${id}`)
      console.log(data)
      return data
    } catch (error) {
      console.log('erro de autenticação ===========>', error)
    }
  }

  async getSearchPokemon(name: string) {
    try {
      const data: any = await pokeAPI.get(`pokemon/${name}`)
      
      return data
    } catch (error) {
      console.log('erro de autenticação ===========>', error)
    }
  }

  async getEvolutionChain(id: string) {
    try {
      const data: any = await pokeAPI.get(`evolution-chain/${id}`)
      
      return data
    } catch (error) {
      console.log('erro de autenticação ===========>', error)
    }
  }
}
export default new pokemonClass()
