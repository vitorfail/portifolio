import Image from 'next/image'
import Logo from './logo.png'
import './Rodape.css'
import Facebook from './facebook.png'
import Instagram from './instagram.png'
import Linkedim from './linkedin.png'

export default function Rodape(){
    return(
        <div className="rodape">
            <div className='info'>
                <div className='coluna'>
                    <h3>Links principais</h3>
                    <h4>Home</h4>
                    <h4>Ferramentas</h4>
                    <h4>Preços</h4>
                    <h4>Contato</h4>
                </div>
                <div className='coluna'>
                    <h3>Materias</h3>
                    <h4>Blog</h4>
                    <h4>Parceria com Agências</h4>
                    <h4>Gia definitivo de Marketing</h4>
                    <h4>Materiais gratuitos</h4>
                </div>
                <div className='coluna'>
                    <h3>Siga-me</h3>
                    <div className='icons'>
                        <div className='backs'>
                            <Image alt='Linkedim' src={Linkedim}></Image>
                        </div>
                        <div className='backs'>
                            <Image alt='Facebook' src={Facebook}></Image>
                        </div>
                        <div className='backs'>
                            <Image alt='intagram' src={Instagram}></Image>
                        </div>
                    </div>
                    <h4><strong>Email:</strong>vitor_andrademanoel@hotmail.com</h4>
                    <h4><strong>Telefone:</strong>(88) 981393182</h4>
                </div>
            </div>
            <div className='copy'>
                <label>Copyright ©2024 Todos os direitos autorais reservados | </label>
                <label>Juazerio do norte CE - CEP: 63180-000 | Termos de uso </label>
            </div>
        </div>
    )
}