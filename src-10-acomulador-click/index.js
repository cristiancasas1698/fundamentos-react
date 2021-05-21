import React from 'react';
import ReactDOM from 'react-dom';
//estilos de la pagina
import './index.css'

//componentes creados
import ContadorApp from './ContadorApp.js'


const divRoot = document.querySelector('#root');

ReactDOM.render(<ContadorApp valor_contador = {0}/> , divRoot);
