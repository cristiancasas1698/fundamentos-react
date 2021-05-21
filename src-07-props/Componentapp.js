import React from 'react'

const persona = {
    nombre: 'Cristian Emmanuel',
    apellido: 'Casas peña',
    email:'cristian.casasp@campusucc.edu.co'
}
const Componentapp = (props) => {
    console.log('componentes varios parametros');
    console.log('parametro 1:' + props.param01);
    console.log('parametro 2:' + props.param02);
    console.log('parametro 3:' + props.param03);

    return (
        <>
        <h1>saludo desde un componente de react</h1>
        <h3>Retorno multilinea de un componente</h3>
        <hr></hr>
        <p>parametro 1: {props.param01}</p>
        <p>parametro 2: {props.param02}</p>
        <p>parametro 3: {props.param03}</p>
        <hr></hr>
        <p>Objeto persona: {persona.nombre} {persona.apellido}</p>
        <p>Email: {persona.email}</p>
        <p>{JSON.stringify(persona,null,null)}</p>

        </>
    );
}

Componentapp.defaultProps = {
    param03: 'sin valores'
}

export default Componentapp
