import "./ProgressBarCircule.css"


export default function ProgressBarCircule(props){
    return(
        <div className="progress-bar-cirucle" style={{  background: "radial-gradient(closest-side, "+props.fundo+" 79%, transparent 80% 100%), conic-gradient(#9d19c1 "+props.percentual+", #f4a9ff 0)"}}>
            {props.children}
        </div>
    )
} 