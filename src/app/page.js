import Inicial from './components/Inicial/Inicial'
import Nav from './components/Nav/Nav'
import styles from './page.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Vitor Manoel Portifolio</title>
      </Head>
      <Nav></Nav>
      <Inicial></Inicial>
    </main>
  )
}
