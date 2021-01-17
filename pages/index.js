import Head from 'next/head'
import styled from 'styled-components'

import Container from '../src/container/home/Container'

const CopyrightContent = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 10px;
  padding-bottom: 6px;
  @media (max-width: 640px) {
    text-align: center;
  }
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Furniture GIS</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1.0, maximum-scale=5, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container />
      </main>
      <footer>
        <CopyrightContent>
          {`copyright © ${new Date().getFullYear()} Furniture SIG`}
        </CopyrightContent>
      </footer>
    </div>
  )
}
