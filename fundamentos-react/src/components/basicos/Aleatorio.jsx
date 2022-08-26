import React from 'react'

export default function Aleatorio(props) {
    const min = props.min
    const max = props.max
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor Mínimo:</strong>{props.min}</p>
            <p><strong>Valor Máximo:</strong>{props.max}</p>
            <p><strong>Valor Escolhido foi:</strong>{aleatorio}</p>
        </div>
    )
}