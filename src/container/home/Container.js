import React from 'react'
import Map from './Map'
import styled from 'styled-components'
import { currencyFormatter, truncStr } from '../../utils/string'
import Card from '../../components/Card'
import color from '../../utils/color'
import { SigData } from '../../../public/sigdata.json'

const ContainerLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(640px, 1fr));
`

const CardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  height: 560px;
  overflow-x: scroll;
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    justify-items: center;
  }
`

const HeaderLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 1em 0px;
`

const HeaderTitle = styled.h1`
  @media (max-width: 640px) {
    text-align: center;
  }
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
        <Map SigData={SigData} />
        <div style={{ margin: '0 1em' }}>
          {/* <HeaderLayout> */}
            <HeaderTitle>Furniture SIG</HeaderTitle>
            {/* <CenterBaseButton>
              <BaseButton color={color.primaryColor} bgColor="transparent">
                Sign Up
              </BaseButton>
              <BaseButton>
                Login
              </BaseButton>
            </CenterBaseButton> */}

          {/* </HeaderLayout> */}

          <CardLayout>
            {SigData.map((item, index) => {
              return (
                <Card
                  key={index}
                  url={item.image}
                  title={item.title}
                  subtitle={truncStr(item.description,25)}
                  price={currencyFormatter(item.price)}
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
