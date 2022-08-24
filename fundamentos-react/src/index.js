import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'


ReactDOM.render(
    <div>
       <Primeiro></Primeiro>
       <ComParametro titulo="Notas alunos" aluno="Matheus" nota="10"/>
       <ComParametro titulo="Notas alunos" aluno="Laura" nota="8"/>     
    </div>,
    document.getElementById('root')
    )