import React from 'react';
import ReactDOM from 'react-dom';
//estilos de la pagina
import './index.css'

//componentes creados
import Componentapp from './Componentapp.js'


const divRoot = document.querySelector('#root');

ReactDOM.render(<Componentapp param01='1234567' param02='ABCDFGHI'/>,divRoot);
