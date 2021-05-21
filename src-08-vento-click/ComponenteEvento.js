import React from 'react'

console.log('componente capurador de eventos en pantalla');

const ComponenteEvento = () =>{
    console.log('componenteEvento');

    const enventoclick = (e) =>{
        console.log(e);
    }

    return (
        <>
        <h1>evento componente react</h1>
        <h5>capturador de eventos click</h5>
        <hr></hr>
        <button onClick={enventoclick}>Click aqui!</button>

        </>
    );
}

export default ComponenteEvento;