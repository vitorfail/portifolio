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
                <Book link={"https://marvel-eight-gold.vercel.app/"} img={marvel} descricao={"Site que fiz Para um teste da brisante usando apí da marvel"} ></Book>
                <Book link={"https://posto-vitorfail.vercel.app/"} img={posto}  descricao={"Um simulador de bomba de combustível para treinamente inicial de frentistas"}></Book>
                <Book link={"https://certificado-marker.vercel.app/"} img={certificado}  descricao={"Sistema que gera certificados. O Beckende é inteirmente em python"} ></Book>
                <Book link={"https://mapa-covid.vercel.app/"} img={covid}  descricao={"Mapeamente de casos de convid no ceara e em pernambuco no ano de 2021"}></Book>
                <Book link={"https://netflix-eight-tan.vercel.app/"} img={netflix}  descricao={"Clone da netflix usadno React"} ></Book>
                <Book link={"https://troco-vitorfail.vercel.app/"} img={troco}  descricao={"Sistema que estimula o pensamento rápido na hora de passar troco"}></Book>
                <Book link={"https://netshoes.vercel.app/"} img={venda}  descricao={"Uma ideia de site para a netshoes"} ></Book>
                <Book link={"https://emprestimo-three.vercel.app/"} img={ia}   descricao={"Simulador de emprestimo"}></Book>
                <Book link={"https://landing-page-nine-self.vercel.app/"} img={page}  descricao={"Site feito para o teste em uma empresa, usadno Nextjs"}></Book>
            </div>
        </section>
    )
}