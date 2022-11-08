import pokeAPI from '../pokeAPI'
import { AxiosRequestConfig } from 'axios'
import { useRouter } from 'next/router'

class pokemonClass {
  async getPokemonWithPagination(offset: number) {
    try {
      const data = await pokeAPI.get(`pokemon?limit=20&offset=${offset}`)
      console.log(data)
      return data
    } catch (error) {
      console.log('erro de autenticação ===========>', error)
    }
  }
}
export default new pokemonClass()
