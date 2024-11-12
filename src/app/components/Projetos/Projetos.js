import Image from "next/image"
import "./Projetos.css"
import ng from  '../../ng.PNG'
import certificado from  '../../certificado.PNG'
import covid from  '../../covid.PNG'
import ia from  '../../ia.PNG'
import marvel from  '../../marvel.PNG'
import netflix from  '../../netflix.PNG'
import page from  '../../page.PNG'
import posto from  '../../posto.PNG'
import troco from  '../../troco.PNG'
import venda from  '../../venda.PNG'
import limpeza from  '../../limpeza.PNG'
import toque from  '../../toque.PNG'
import gf1 from  '../../gf1.png'
import gf2 from  '../../gf2.png'
import I1 from  './i1.png'
import I2 from  './i2.png'
import Book from "../Book"
import Chuva from "../Chuva"
import { useEffect, useState } from "react"
export default function Projetos(){
    const [ativo, setativo] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', function() {
            var d = document.getElementsByClassName("aparecer")
            if(d[0] !== null){
                for(let i =0; i< d.length; i++){
                    var position = d[i].getBoundingClientRect();
                    if(position.top+205 < window.innerHeight && position.bottom >= 0){
                        if(ativo !==true){
                            d[i].id = 'show'
                            setativo(true)    
                        }
                    }
                    if(position.bottom > window.innerHeight){
                        d[i].id = ''
                        setativo(false)    
                    }
                }
            }
        });
    })

    return(
        <section id={ativo?"s":""} className="projetos">
            <div className="titulo">
                <h2>Projetos</h2>
                <div className="eng">
                    <Image alt="engrenagem" className="aparecer" src={I2} width={40} height={40}></Image>
                    <div className="aparecer">
                        <Image alt="planos" src={I1} width={40} height={30}></Image>
                    </div>
                </div>
            </div>
            <p className="aviso" >Abaixo algos projetos que fiz. Dentre eles alguns testes técnicos para vagas. Já outros por 
                pura vontade própria
            </p>
            <div className="paginas">
                <Book link={"https://marvel-eight-gold.vercel.app/"} img={marvel} descricao={"Site que fiz para um teste da brisanet usando a API da marvel"} ></Book>
                <Book link={"https://posto-vitorfail.vercel.app/"} img={posto}  descricao={"Um simulador de bomba de combustível para treinamentO inicial de frentistas"}></Book>
                <Book link={"https://certificado-marker.vercel.app/"} img={certificado}  descricao={"Sistema que gera certificados. O Beckend é inteirAmente em python"} ></Book>
                <Book link={"https://mapa-covid.vercel.app/"} img={covid}  descricao={"MapeamentO de casos de covid no ceara e em pernambuco no ano de 2021"}></Book>
                <Book link={"https://netflix-eight-tan.vercel.app/"} img={netflix}  descricao={"Clone da netflix usadno React"} ></Book>
                <Book link={"https://troco-vitorfail.vercel.app/"} img={troco}  descricao={"Sistema que estimula o pensamento rápido na hora de passar troco"}></Book>
                <Book link={"https://netshoes.vercel.app/"} img={venda}  descricao={"Uma ideia de site para a netshoes"} ></Book>
                <Book link={"https://emprestimo-three.vercel.app/"} img={ia}   descricao={"Simulador de empréstimo"}></Book>
                <Book link={"https://landing-page-nine-self.vercel.app/"} img={page}  descricao={"Site feito para o teste em uma empresa, usando Nextjs"}></Book>
                <Book link={"https://limpeza-teste.vercel.app/login"} img={limpeza}   descricao={"Um sistema de cadastro de usuários onde é possivel ver no plano carteziano a distância dos clientes"}></Book>
                <Book link={"https://toque-de-ouro.vercel.app/"} img={toque}  descricao={"Template para uma empresa de venda de lingerie"}></Book>
                <Book link={"https://gestaofinanceira360.app/"} img={gf1}  descricao={"Site para venda de planilhas para gestão financeira"}></Book>
                <Book link={"https://gestaofinanceira360.app/dashboard/"} img={gf2}  descricao={"Site para venda de planilhas para gestão financeira"}></Book>

            </div>
        </section>
    )
}