import React, {useState} from "react";
import "./input.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{

    const [valor , setValor] = useState('Inicial')

    function quandoMudar(e){
        setValor(e.target.value)
    }

    
    return (
        <div className="input">
            <h2>{valor}</h2>
            <input value={valor} onChange={quandoMudar}/>
            <input value={undefined} />
        </div>
    )
}

