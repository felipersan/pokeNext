import axios from 'axios'

let token

if (typeof window !== 'undefined') {
  token = window.localStorage.getItem('token')
}

var baseUrl = 'https://pokeapi.co/api/v2/'

const API = axios.create({
  baseURL: baseUrl
})

export default API
