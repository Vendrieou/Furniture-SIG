import React from 'react'
import Map from './Map'
import Card from '../../components/Card'
import styled from 'styled-components'

const ContainerLayout = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`

const CardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`

const Container = () => {

  return (
    <>
      <ContainerLayout>
        <Map />
        <CardLayout>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardLayout>
      </ContainerLayout>
    </>
  )
}

export default Container
