import React from "react";

export default function Aleatorio(props){
    const max = props.max
    const min = props.min
    const numAleatorio = Math.random() * (max-min) + min
    const numAleatorioCeil = Math.ceil(numAleatorio)
    return (
        <div>
            <h1>O número gerado foi: {numAleatorioCeil}</h1>
        </div>
    )
}