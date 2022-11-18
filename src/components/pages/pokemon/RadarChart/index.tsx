import React, { memo, PureComponent, useEffect, useState } from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts'
import { Container } from './styles'

interface props {
  pokemon: any
}

function RadarPokemonChart({ pokemon }: props) {
  const [dataRadarChart, setDataRadarChart] = useState<Array<any>>([])

  useEffect(() => {
    if (pokemon) {
      handleDate(pokemon.stats)
    }
  }, [pokemon])

  console.log('teste')

  function handleDate(data: any) {
    let dataArrayRadarChart: Array<any> = []
    data.map((row: any, key: number) => {
      console.log(row)
      const newData = {
        subject: handleFieldName(row?.stat.name),
        A: row?.base_stat,
        B: row?.base_stat,
        fullMark: 150
      }
      dataArrayRadarChart.push(newData)
    })
    console.log(dataArrayRadarChart)
    setDataRadarChart(dataArrayRadarChart)
  }

  function handleFieldName(fieldName: string) {
    if (fieldName === 'hp') return 'Vida'
    if (fieldName === 'attack') return 'Ataque'
    if (fieldName === 'defense') return 'Defesa'
    if (fieldName === 'special-attack') return 'Ataque Especial'
    if (fieldName === 'special-defense') return 'Defesa Especial'
    if (fieldName === 'speed') return 'Velocidade'
  }

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataRadarChart}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="var(--P1C)"
            fill="var(--P1C)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Container>
  )
}

export default memo(RadarPokemonChart)
