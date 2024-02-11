import Habilidades from './components/Habilidades/Habilidades'
import Inicial from './components/Inicial/Inicial'
import Nav from './components/Nav/Nav'
import Projetos from './components/Projetos/Projetos'
import Head from 'next/head'
import "./index.css"
import Estrelas from './components/Estrelas'

export default function Home() {
  return (
    <main>
      <Estrelas estrelas={[0,0,0,0,0,0,0]} largura={400} ></Estrelas>
      <Head>
        <title>Vitor Manoel Portifolio</title>
      </Head>
      <Nav></Nav>
      <Inicial></Inicial>
      <Habilidades></Habilidades>
      <Projetos></Projetos>
    </main>
  )
}
