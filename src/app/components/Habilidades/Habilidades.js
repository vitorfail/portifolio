"use client";
import { useEffect, useState } from "react";
import "./Habilidades.css"
import Image from "next/image";
import ProgressBarCircule from "../ProgressBarCircule/ProgressBarCircule";
export default function Habilidades(){
    const [carousel, setcarousel]= useState()
    const [itemWidth, setitemWidth] = useState() 
    const itemsPerPage = 3;
    let currentPosition = 0;
    useEffect(() =>{
        setcarousel( window.document.querySelector('.carousel'))
        setitemWidth(document.querySelector('.progress-bar-cirucle').offsetWidth)
    })

    function passar_esquerda(){
        currentPosition += itemWidth * itemsPerPage;
        updatePosition()
    }
    function passar_direito() {
        currentPosition -= itemWidth * itemsPerPage;
        updatePosition();
    }
            


    function updatePosition() {
        carousel.style.transform = `translateX(${currentPosition}px)`;
    }
    return(
        <section className="habilidades">
            <div className="box">
                <div className="titulo">
                    <h2>Habilidades</h2>
                    <p>Algumas das minha Habilidades</p>
                </div>
                <div className="carousel-container">
                    <div className="carousel">
                        <ProgressBarCircule percentual={"70%"} fundo={"rgb(29,29,29)"}>Css</ProgressBarCircule>
                        <ProgressBarCircule percentual={"80%"} fundo={"rgb(29,29,29)"}>Javascript</ProgressBarCircule>
                        <ProgressBarCircule percentual={"85%"} fundo={"rgb(29,29,29)"}>React</ProgressBarCircule>
                        <ProgressBarCircule percentual={"30%"} fundo={"rgb(29,29,29)"}>Next</ProgressBarCircule>
                        <ProgressBarCircule percentual={"30%"} fundo={"rgb(29,29,29)"}>Python</ProgressBarCircule>
                        <ProgressBarCircule percentual={"40%"} fundo={"rgb(29,29,29)"}>Node</ProgressBarCircule>
                    </div>
                    <button className="btn-prev" onClick={() => passar_direito()} >&#10094;</button>
                    <button className="btn-next" onClick={() => passar_esquerda()}>&#10095;</button>
                </div>
            </div>
        </section>
    )
}