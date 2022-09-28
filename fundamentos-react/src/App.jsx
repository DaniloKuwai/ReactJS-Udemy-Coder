import React from 'react';

import Contador from './components/contador/Contador.jsx'
import Input from './components/formulario/Input'
import DiretaPai from "./components/comunicacao/DiretaPai"
import Usuarioinfo from './components/condicional/Usuarioinfo.jsx';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia.jsx';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento.jsx';
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card.jsx';
import "./App.css";
import IndiretaPai from './components/comunicacao/IndiretaPai';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={10}></Contador>
            </Card>    

            <Card titulo="#11 - Componente Controlado(input)" color="#E45F56">
                <Input></Input>
            </Card>    

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>   

            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>    

            <Card titulo="#08 - Par Ou impar" color="#982395">
                <ParOuImpar numero={20}></ParOuImpar>
                <Usuarioinfo usuario={{ nome: 'Dan'}}></Usuarioinfo>
            </Card>    
            
            <Card titulo="#07 - Desafio Repetição" color="#FF4C68">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repeticão" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>    

            <Card titulo="#05 - Componente com filhos" color="#00c8f8">
                <Familia sobrenome="Ferreira">
                <FamiliaMembro nome="Pedro" ></FamiliaMembro>
                <FamiliaMembro nome="Ana" ></FamiliaMembro>
                <FamiliaMembro nome="Gustavo" sobrenome="Silva"></FamiliaMembro>
                </Familia>
            </Card>    

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