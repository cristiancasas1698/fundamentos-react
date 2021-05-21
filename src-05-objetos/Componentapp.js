import React from 'react'

const persona = {
    nombre: 'Cristian Emmanuel',
    apellido: 'Casas peña',
    email:'cristian.casasp@campusucc.edu.co'
}
const Componentapp = ({param01,param02,param03}) => {
    console.log('componentes varios parametros');
    console.log('parametro 1:' + param01);
    console.log('parametro 2:' + param02);
    console.log('parametro 3:' + param03);

    return (
        <>
        <h1>saludo desde un componente de react</h1>
        <h3>Retorno multilinea de un componente</h3>
        <hr></hr>
        <p>parametro 1: {param01}</p>
        <p>parametro 2: {param02}</p>
        <p>parametro 3: {param03}</p>
        <hr></hr>
        <p>Objeto persona: {persona.nombre} {persona.apellido}</p>
        <p>Email: {persona.email}</p>
        <p>{JSON.stringify(persona,null,null)}</p>

        </>
    );
    
    
   
}

export default Componentapp
