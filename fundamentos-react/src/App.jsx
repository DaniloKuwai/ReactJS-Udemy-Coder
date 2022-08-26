import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento.jsx'
import Aleatorio from './components/basicos/Aleatorio'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div id="app">
            <h1>Fundamentos React (Arrow)</h1>
            <Fragmento></Fragmento>
            <ComParametro titulo="Notas alunos" aluno="Matheus" nota="10" />
            <Primeiro></Primeiro>
            <Aleatorio min={10} max={60} />
        </div>
    );
}