import "./style.css"

export function Dashed({width = "300px", height = "0.3rem", marginB = "0.5rem"}){
  return(
    <span className="dashed" style={{width: width, height: height, marginBottom: marginB}}></span>
  )
}