"use client";
import Image from "next/image"
import "./Inicial.css"
import astronaut from "../../astronaut.png"
import { useEffect } from "react"

export default function Inicial(){
    return(
        <section className="inicial">
            <div className="apresentation">
                <h2>MEU PORTIFÓLIO WEB</h2>
                <div className="titulo">
                    <span>Oi, Sou Vitor Manoel Programador</span>
                </div>
                <p>Me chamo Vitor Manoel de Andrade Souza. Sou 
                    Freelancer em  desemvolvimento web com Reac.js e NEXT.js</p>
            </div>
            <div className="image">
                <Image width={450} height={450} src={astronaut}></Image>
            </div>
        </section>
    )
}