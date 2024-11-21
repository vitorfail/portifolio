'use client';
import Habilidades from './components/Habilidades/Habilidades'
import Inicial from './components/Inicial/Inicial'
import Nav from './components/Nav/Nav'
import Projetos from './components/Projetos/Projetos'
import Head from 'next/head'
import "./index.css"
import Rodape from './components/Rodape/Rodape'
import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Lanterna from "./components/Lanterna"

export default function Home() {
  const [load, setload] = useState(true)
  useEffect(() =>{
    setTimeout(() => {
      setload(false)
    }, 2000);
  }, [])
  return (
load?<Loading ></Loading>:
      <main>
        <Head>
          <title>Vitor Manoel Portifolio</title>
        </Head>
        <Nav></Nav>
        <Inicial></Inicial>
        <Habilidades></Habilidades>
        <Projetos></Projetos>
        <Lanterna></Lanterna>
        <Rodape></Rodape>
      </main>

  )
}
