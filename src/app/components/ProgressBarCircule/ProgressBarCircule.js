import "./ProgressBarCircule.css"


export default function ProgressBarCircule(props){
    return(
        <div className="progress-bar-cirucle" style={{  background: "radial-gradient(closest-side, rgb(0,0,0,0) 0%, transparent 80% 100%), conic-gradient(#9d19c1 "+props.percentual+", #f4a9ff 0)"}}>
            <div className="circulo" style={{background:props.fundo}}> 
                {props.children}
            </div>
        </div>
    )
} 