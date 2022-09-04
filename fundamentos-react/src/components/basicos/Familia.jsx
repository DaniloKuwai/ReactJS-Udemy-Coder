import React from "react";
import { cloneElement } from "react";

export default function Familia(props){
    return(
        <div>
            {
                React.Children.map(props.children,(child)=>{
                    return cloneElement(child,props)
                })
            }
        </div>

    )
}

// eslint-disable-next-line no-lone-blocks
{/*
                    Agora vamos usar o Children.map, que serve para mapear arrays dentro de outros arrays
                    no caso ele vai ler o array que teem o props.children e vai passar como parâmetro todos
                    os filhos dentro da variável child, e vai retornar com o cloneElement os valores das variáveeis
            */}