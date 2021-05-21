import React from 'react';
import ReactDOM from 'react-dom';
//estilos de la pagina
import './index.css'

//componentes creados
import ComponenteEvento from './ComponenteEvento.js'


const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponenteEvento/> , divRoot);
