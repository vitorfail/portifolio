import Image from "next/image"
import "./Nav.css"
import {AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai"

export default function Nav(){
    return(
        <section className="navegador">
            <div className="logo">
                <h2>LOGO</h2>
            </div>
            <div className="options">
                <h4>Home</h4>
                <h4>Habilidades</h4>
                <h4>Projetos</h4>
            </div>
            <div className="social_media">
                <div>
                    <AiFillInstagram color="white"></AiFillInstagram>
                </div>
                <div>
                    <AiFillLinkedin color="white"></AiFillLinkedin>
                </div>
                <div>
                    <AiFillGithub color="white"></AiFillGithub>
                </div>
            </div>
            <div className="call">
                <button className="">Vamos!</button>
            </div>
        </section>
    )
}