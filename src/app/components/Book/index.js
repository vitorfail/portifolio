import Image from 'next/image'
import './index.css'
import React from 'react'


export default function Book(props){
    return(
        <div className='book'>
            <p className=''>{props.titulo}</p>
            <a target='_blank' href={props.link} className='book--descri'>
            </a>
            <div className='book--thumb'>
                <Image alt='thumb' src={props.img}></Image>
                <div className='texto'>
                    <p>{props.descricao}</p>
                </div>
            </div>
        </div>

    )
}