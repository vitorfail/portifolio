'use client';
import React, { useEffect, useState } from 'react';

import './index.css'
export default function Estrelas(props){
    const [inicio, setinicio] = useState(true)
    useEffect(() => {
        setTimeout(()=> {
            setinicio(false)
        },4000)
    })
    function numeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return(
        <div style={{display:'flex', width:props.largura+"px",height:props.largura+"px"}}  className="estrelas">
            <div className={inicio?"lista show":"lista"}>
                {props.estrelas.map((item,key) => (
                    <div className='star' key={key} style={{"--i":numeroAleatorio(14, 34), 
                    animationDelay:numeroAleatorio(0, 5)+"s"}}></div>
                ))}
            </div>
        </div>
    )
}