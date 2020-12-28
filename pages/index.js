import Head from 'next/head'
import Container from '../src/container/home/Container'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Furniture GIS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container />
    </div>
  )
}
