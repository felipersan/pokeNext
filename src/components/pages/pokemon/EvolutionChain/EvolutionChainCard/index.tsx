import Image from 'next/image'
import Link from 'next/link'
import { useGetCompletePokemon } from '../../../../../services/pokeApi/GET/useGetCompletePokemon'
import { Container } from './styles'

interface props {
  name: string
}

export default function EvolutionChainCard({ name }: props) {
  const { completePokemon } = useGetCompletePokemon(name)
  console.log('pokemon evolução ', completePokemon)
  return (
    <Container>
      <Link href={`/pokemon/${name}`}>
        <Image
          alt={`imagem do pokemon ${name}`}
          src={completePokemon?.data.sprites?.front_default}
          height={100}
          width={100}
        />
      </Link>
    </Container>
  )
}
