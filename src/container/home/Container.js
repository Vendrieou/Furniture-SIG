import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Map from './Map'
import styled from 'styled-components'
import { currencyFormatter, truncStr } from '../../utils/string'
import Card from '../../components/Card'
// import color from '../../utils/color'
// import { SigData } from '../../../public/sigdata.json'

const ContainerLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(640px, 1fr));
  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
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

// const HeaderLayout = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   margin: 1em 0px;
// `

const HeaderTitle = styled.h1`
  @media (max-width: 640px) {
    text-align: center;
  }
`

// const CenterBaseButton = styled.div`
//   justify-self: center;
// `

// const BaseButton = styled.button`
//   padding: 0.8em 36px;
//   background-color: ${props => props.bgColor ? props.bgColor : color.primaryColor};
//   color: ${props => props.color ? props.color : color.white};
//   font-size: 1em;
//   font-weight: bold;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `

const Container = () => {
  const [data, setData] = useState([])

  const getList = async () => {
    try {
      let response = await axios.get('http://localhost:8080/api/list', {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDQ0NDlmZDE0YmNhMmYyOGM2ZGYwNyIsImlhdCI6MTYxMDg5MjQ0NywiZXhwIjoxNjE5NTMyNDQ3fQ.rsmU7rxjH0kz_FdL0zxfP05M7uh9JP4BUkd7wZ_abEs'
        }
      })

      if(response.status === 200) {
        setData(response.data.data)
      }
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <>
      <ContainerLayout>
        <Map SigData={data && data.length > 0 ? data : []} />
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
            {data && data.length > 0 ? 
              data.map((item, index) => {
                return (
                  <Card
                    key={index}
                    url={item.image}
                    title={item.name}
                    subtitle={truncStr(item.description,25)}
                    price={currencyFormatter(item.price)}
                  />
                )
              })
              : <h1>no list</h1>
            }

          </CardLayout>
        </div>

      </ContainerLayout>
    </>
  )
}

export default Container
