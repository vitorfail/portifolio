import Image from 'next/image'
import './index.css'
import React from 'react'

/**
 * @constructor
 * @param {string} titulo
 * @param {string} img
 * @param {string} link 
 * @param {string} descricao
 */
export default function Book(props){
    return(
        <div className='book'>
            <p className='titulo'>{props.titulo}</p>
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