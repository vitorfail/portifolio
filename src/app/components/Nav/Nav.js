"use client";
import Image from "next/image"
import "./Nav.css"
import {AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { useEffect, useState } from "react"
import MoverScroll from "../../MoverScroll"

export default function Nav(){
    const [blackheader, setblackheader] = useState(false)
    useEffect(()=>{
        const scrollevent = () =>{
          if(window.scrollY> 10){
            setblackheader(true)
          }
          else{
            setblackheader(false)
          }
        }
        window.addEventListener("scroll", scrollevent)
        return () => {
          window.removeEventListener("scroll", scrollevent)
        }
      },[])
    return(
        <section className={blackheader? "navegador black":"navegador"}>
            <div className="ajuste">
                <div className="logo">
                    <h2>LOGO</h2>
                </div>
                <div className="options">
                    <h4 onClick={() => MoverScroll(".navegador")} >Home</h4>
                    <h4 onClick={() => MoverScroll(".habilidades")}>Habilidades</h4>
                    <h4 onClick={() => MoverScroll(".projetos")}>Projetos</h4>
                </div>
                <div className="social_media">
                    <a href="https://www.instagram.com/vitor_andrademanoel04/" target="_blank">
                        <AiFillInstagram color="white"></AiFillInstagram>
                    </a>
                    <a href="https://www.linkedin.com/in/vitor-manoel-programer/" target="_blank">
                        <AiFillLinkedin color="white"></AiFillLinkedin>
                    </a>
                    <a href="https://github.com/vitorfail" target="_blank">
                        <AiFillGithub color="white"></AiFillGithub>
                    </a>
                </div>
                <div className="call">
                    <button className="">Vamos!</button>
                </div>

            </div>
        </section>
    )
}