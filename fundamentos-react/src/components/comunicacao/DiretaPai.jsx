import React from "react";
import DiretaFilho from './DiretaFilho'

export default function DiretaPai(props){
    return (
        <div>
            <DiretaFilho nome="Matheus" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Henrique" idade={18} nerd={false}></DiretaFilho>
        </div>
    )
}