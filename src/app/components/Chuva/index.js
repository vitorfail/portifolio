import Image from 'next/image'
import './index.css'
import React from 'react'
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export default function Chuva(props){
    return(
        <div id={props.show?"show": "of"} className='chuva'>
            {props.gotas.map((item, index) =>(
                <div key={index} className='gotas' 
                style={{width:numeroAleatorio(4,10)+"px", 
                aspectRatio:1/1,
                bottom:(100-index)+"%",
                right:((40-index)-numeroAleatorio(4,20))+"vw",
                rotate:((index*2)+30)+"deg",
                "--i":numeroAleatorio(4,20)    
            }}></div>))}
            {props.gotas.map((item, index) =>(
                <div id='gotas2' key={index} className='gotas' 
                style={{width:numeroAleatorio(4,10)+"px", 
                aspectRatio:1/1,
                bottom:(50-index)+"%",
                right:((1+index)-numeroAleatorio(4,20))+"vw",
                rotate:((index*2)-70)+"deg",
                "--i":numeroAleatorio(4,20)      
            }}></div>))}
            {props.gotas.map((item, index) =>(
                <div id='gotas3' key={index} className='gotas' 
                style={{width:numeroAleatorio(4,10)+"px", 
                aspectRatio:1/1,
                bottom:(100-index)+"%",
                right:((60+index)+numeroAleatorio(4,20))+"vw",
                rotate:((index*1.3)+310)+"deg",
                "--i":numeroAleatorio(4,20)      
            }}></div>))}
                        {props.gotas.map((item, index) =>(
                <div id='gotas4' key={index} className='gotas' 
                style={{width:numeroAleatorio(4,10)+"px", 
                aspectRatio:1/1,
                bottom:(50-index)+"%",
                right:((110-index)+numeroAleatorio(4,20))+"vw",
                rotate:((index*1.3)+310)+"deg",
                "--i":numeroAleatorio(4,20)      
            }}></div>))}


        </div>

    )
}