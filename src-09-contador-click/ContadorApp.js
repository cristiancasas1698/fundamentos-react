import React, { useState } from 'react'

console.log('componente capurador de eventos en pantalla');

const ContadorApp = ({valor_contador}) =>{
    console.log('componenteEvento');

    const [contador, setContador] = useState(valor_contador); 

    const enventoclick = () =>{
        setContador(contador + 1);
        console.log('contador = ' + contador);
    }

    return (
        <>
        <h1>contador componente react</h1>
        <h5>acomulador de  click</h5>
        <hr></hr>
        <h3>contador {contador}</h3>
        <hr></hr>
        <button onClick={enventoclick}> Contador +1</button>

        </>
    );
}

export default ContadorApp;