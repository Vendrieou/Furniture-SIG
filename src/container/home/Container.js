import React from 'react'
import Map from './Map'
import styled from 'styled-components'
import Card from '../../components/Card'
import color from '../../utils/color'

const ContainerLayout = styled.div`
  display: flex;
`

const CardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  height: 560px;
  overflow-x: scroll;
`

const HeaderLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 1em 0px;
`

const HeaderTitle = styled.h1`
  margin: unset;
`

const CenterBaseButton = styled.div`
  justify-self: center;
`

const BaseButton = styled.button`
  padding: 0.8em 36px;
  background-color: ${props => props.bgColor ? props.bgColor : color.primaryColor};
  color: ${props => props.color ? props.color : color.white};
  font-size: 1em;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Container = () => {

  return (
    <>
      <ContainerLayout>
        <Map />
        <div style={{ margin: '0 1em' }}>
          <HeaderLayout>
            <HeaderTitle>Furniture SIG</HeaderTitle>
            <CenterBaseButton>
              <BaseButton color={color.primaryColor} bgColor="transparent">
                Sign Up
              </BaseButton>
              <BaseButton>
                Login
              </BaseButton>
            </CenterBaseButton>

          </HeaderLayout>

          <CardLayout>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
              return (
                <Card
                  key={index}
                  url="https://i.pinimg.com/236x/50/0d/25/500d25f7db13838c18b167a69c924d6f--modern-dining-chairs-charcoal.jpg"
                  title="Hello"
                  subtitle="Jl besi"
                  price="Rp 123.000"
                />
              )
            })}

          </CardLayout>
        </div>

      </ContainerLayout>
    </>
  )
}

export default Container
