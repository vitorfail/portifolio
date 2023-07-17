"use client";
import Image from "next/image"
import "./Inicial.css"
import astronaut from "../../astronaut.png"
import { useEffect } from "react"

export default function Inicial(){
    var loop = false
    var text = "Oi, Sou Vitor Manoel Programador"
    var letras = text.split("")
    var fracao = ""
    useEffect( () =>{
        escrever()
    }, [])
    function escrever(){
        if(loop == false){
            for(var i =0;i<letras.length;i++){
                setInterval(function () {fracao = fracao +letras[i]}, 3000);
                console.log(fracao)  
            }
            loop == true    
        }
    }
    return(
        <section className="inicial">
            <div className="apresentation">
                <div className="titulo">
                    <h1>{fracao}</h1>
                </div>
                <p>Me chamo Vitor Manoel de Andrade Souza. Sou 
                    Freelancer em  desemvolvimento web com Reac.js e NEXT.js</p>
            </div>
            <div className="image">
                <Image width={250} height={250} src={astronaut}></Image>
            </div>
        </section>
    )
}