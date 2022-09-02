import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento.jsx';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card.jsx';
import "./App.css";


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

            <Card titulo="#04 - Desafio  Aleatório" color="#FA6900">
                <Aleatorio min={10} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento></Fragmento>
            </Card>
            
            <Card titulo="#02 - ComParametro" color="#E8B71A">
                <ComParametro titulo="Notas alunos" aluno="Matheus" nota="10" />
            </Card>
            
            <Card titulo="#01 -Primeiro Componente" color="#588C73">
                <Primeiro>
                </Primeiro>
            </Card>
            
            </div>
            
            
            
        </div>
    );
}