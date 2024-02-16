"use client";
import Image from "next/image"
import "./Inicial.css"
import astronaut from "../../astronaut.png"
import { useEffect, useState } from "react"

export default function Inicial(){
    const [anima, setanima] = useState("titulo")

    return(
        <section className="inicial">
            <div className="apresentation">
                <h2>Meu portifólio web</h2>
                <div className={anima}>
                    <span>Oi, Sou Vitor Manoel e sou Programador</span>
                </div>
                <p>Me chamo Vitor Manoel de Andrade Souza. Sou 
                    Freelancer em desenvolvimento web com Reac.js e NEXT.js</p>
            </div>
            <div className="image">
                <Image width={450} height={450} src={astronaut}></Image>
            </div>
        </section>
    )
}