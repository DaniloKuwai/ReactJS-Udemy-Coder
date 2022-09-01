import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento.jsx'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card.jsx'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div id="app">
            <h1>Fundamentos React (Arrow)</h1>
            <Card titulo="Desafio  Aleatório">
                <Aleatorio min={10} max={60} />
            </Card>

            <Card titulo="Fragmento"><Fragmento></Fragmento></Card>
            
            <Card titulo="ComParametro"><ComParametro titulo="Notas alunos" aluno="Matheus" nota="10" /></Card>
            
            <Card titulo="Primeiro Componente"><Primeiro></Primeiro></Card>
            
            
        </div>
    );
}