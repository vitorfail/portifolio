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
import Book from "../Book"
export default function Projetos(){
    return(
        <section className="projetos">
            <h2>Projetos</h2>
            <p>Abaixo algos projetos que fiz. Dentre eles alguns testes técnicos para vagas. Já outros por 
                pura vontade própria
            </p>
            <div className="paginas">
                <Book link={marvel} descricao={"Site que fiz Para um teste da brisante usando apí da marvel"} ></Book>
                <Book link={posto}></Book>
                <Book link={ng} ></Book>
                <Book link={certificado} ></Book>
                <Book link={covid} ></Book>
                <Book link={netflix} ></Book>
                <Book link={troco} ></Book>
                <Book link={venda} ></Book>
                <Book link={ia} ></Book>
                <Book link={page} ></Book>
            </div>
        </section>
    )
}