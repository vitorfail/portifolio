import Image from "next/image"
import "./Projetos.css"
import ng from  '../../ng.png'
import certificado from  '../../certificado.png'
import covid from  '../../covid.png'
import ia from  '../../ia.png'
import marvel from  '../../marvel.png'
import netflix from  '../../netflix.png'
import page from  '../../page.png'
import posto from  '../../posto.png'
import troco from  '../../troco.png'
import venda from  '../../venda.png'
export default function Projetos(){
    return(
        <section className="projetos">
            <h2>Projetos</h2>
            <p>Abaixo algos projetos que fiz. Dentre eles alguns testes técnicos para vagas. Já outros por 
                pura vontade própria
            </p>
            <div className="paginas">
                <a href="https://marvel-eight-gold.vercel.app/" target="_blank" className="page">
                    <div className="titulo">
                        <h2>Teste Brisanet</h2>
                        <p>Uma página que fiz para um teste técnico da Brisanet</p>
                    </div>
                    <Image src={marvel} alt="projeto" width={"100%"} height={"100%"}></Image>
                </a>
                <a href="https://posto-git-master-vitorfail.vercel.app/" target="_blank" className="page">
                    <div className="titulo">
                        <h2>Simulador de posto</h2>
                        <p>Um simulador de bombas de combustível. Fiz para os alunos de um curso de frentista que eu mestrei</p>
                    </div>
                    <Image src={posto} alt="projeto" width={"100%"}></Image>
                </a>
                <a href="https://tybe.vercel.app/login" target="_blank" className="page">
                    <div className="titulo">
                        <h2>Sistema de crédito</h2>
                        <p>Um teste técnico que fiz para a empresa NG.CASH</p>
                    </div>
                    <Image src={ng} alt="projeto" width={"100%"}></Image>
                </a>
                <a href="https://certificado-marker.vercel.app/" target="_blank" className="page">
                    <div className="titulo">
                        <h2>Sistema de certificado</h2>
                        <p>Sistema feito com beckend em python que gera certificados personalizados</p>
                    </div>
                    <Image src={certificado} alt="projeto" width={"100%"}></Image>
                </a>
                <a href="https://mapa-covid.vercel.app/" target="_blank" className="page">
                    <div className="titulo">
                        <h2>Mapa da covid</h2>
                        <p>Mapa de casos de covid no ceará e pernambuco</p>
                    </div>
                    <Image src={covid} alt="projeto" width={"100%"}></Image>
                </a>
                <a href="https://netflix-eight-tan.vercel.app/"  target="_blank" className="page">
                    <div className="titulo">
                        <h2>Clone da Netflix</h2>
                        <p>Apenas um clone da interface da netflix</p>
                    </div>
                    <Image src={netflix} alt="projeto" width={"100%"}></Image>
                </a>
                <a href="https://emprestimo-three.vercel.app/" target="_blank" className="page">
                    <div className="titulo">
                        <h2>Simulador de troco</h2>
                        <p>Simulador de troco para treinamento de pessoas para o caixa</p>
                    </div>
                    <Image src={troco} alt="projeto" width={"100%"}></Image>
                </a>
                <a href="https://netshoes.vercel.app/" target="_blank" className="page">
                    <div className="titulo">
                        <h2>Conceito de página</h2>
                        <p>Conceito de uma página para Netshoes</p>
                    </div>
                    <Image src={venda} alt="projeto" width={"100%"}></Image>
                </a>
                <a href="https://emprestimo-three.vercel.app/" target="_blank" className="page">
                    <div className="titulo">
                        <h2>Simulador de empréstimo</h2>
                        <p>Um simulador de empréstimo que usa uma ia feita em python servida em um beckend em flask</p>
                    </div>
                    <Image src={ia} alt="projeto" width={"100%"}></Image>
                </a>
                <a href="https://landing-page-git-master-vitorfail.vercel.app/" target="_blank" className="page">
                    <div className="titulo">
                        <h2>Teste técnico</h2>
                        <p>Um teste técnico para a empresa Leadster</p>
                    </div>
                    <Image src={page} alt="projeto" width={"100%"}></Image>
                </a>
            </div>
        </section>
    )
}