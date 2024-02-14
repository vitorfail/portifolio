'use client';
import Habilidades from './components/Habilidades/Habilidades'
import Inicial from './components/Inicial/Inicial'
import Nav from './components/Nav/Nav'
import Projetos from './components/Projetos/Projetos'
import Head from 'next/head'
import "./index.css"
import Estrelas from './components/Estrelas'
import Rodape from './components/Rodape/Rodape'
import { useEffect, useState } from 'react';
import Loading from './components/Loading';

export default function Home() {
  const [load, setload] = useState(true)
  useEffect(() =>{
    setTimeout(() => {
      setload(false)
    }, 2000);
  }, [])
  return (
    <main>
      <Loading show={load?"loading show": "loading"} ></Loading>:
      <Estrelas estrelas={[0,0,0,0,0,0,0]} star={[0,0,0,0,0,0,0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]} largura={400} ></Estrelas>
      <Head>
        <title>Vitor Manoel Portifolio</title>
      </Head>
      <Nav></Nav>
      <Inicial></Inicial>
      <Habilidades></Habilidades>
      <Projetos></Projetos>
      <Rodape></Rodape>
    </main>
  )
}
