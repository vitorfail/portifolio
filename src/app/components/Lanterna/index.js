import './index.css'
import React from 'react'
import { useEffect, useState } from 'react'


export default function Lanterna(){
    const [ativo, setativo] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', function() {
            var d = document.getElementsByClassName("stage")
            if(d[0] !== null){
                for(let i =0; i< d.length; i++){
                    var position = d[i].getBoundingClientRect();
                    console.log(position.top+ "  "+window.innerHeight)
                    if(position.top+100 < window.innerHeight){
                        if(ativo !==true){
                            d[i].id = 'show'
                            setativo(true)    
                        }
                    }
                    if(position.top > window.innerHeight){
                        d[i].id = ''
                        setativo(false)    
                    }
                }
            }
        })});
    return(
        <section className="stage">
            <div id={ativo?'noite-mostra':""} className='text-lanterna'>
                <p className={ativo?'noite':""}>&quot;No dia mais claro,&quot;</p>
                <p className={ativo?'noite':""}>&quot;na noite mais densa,&quot;</p> 
                <p className={ativo?'noite':""}>&quot;o mal sucumbira ante minha presença, &quot;</p>
                <p className={ativo?'noite':""}>&quot;E aquele que venera o mal há de penar,&quot;</p>
                <p className={ativo?'noite':""}>&quot;Quando a luz do código o encontrar!&quot;</p>
            </div>
            <div className="scene">
                <div className="halo">
                    <i></i>
                    <span className="halo-star"></span>
                    <span className="halo-star"></span>
                    <span className="halo-star"></span>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <div className="lantern">
                    <div className="lantern-handle"></div>
                    <div className="lantern-inner">
                        <div className="lantern-chain"></div>
                        <div className="lantern-head"></div>
                        <div className="lantern-body">
                            <div className="lantern-spark"></div>
                            <div className="lantern-spark"></div>
                            <div className="lantern-spark"></div>
                            <div className="lantern-flame"></div>
                        </div>
                        <div className="lantern-base"></div>
                    </div>
                </div>
                <div className="planets">
                    <div className="planet"></div>
                    <div className="planet"></div>
                    <div className="planet"></div>
                    <div className="planet"></div>
                    <div className="planet"></div>
                    <div className="planet"></div>
                </div>
            </div>
        </section>
    )
}