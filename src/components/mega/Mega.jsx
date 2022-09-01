import React, { useState } from 'react';
import "./Mega.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    function gerarNumerosNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max + 1 - min))+min;
        return array.includes(aleatorio) ? 
        gerarNumerosNaoContido(min, max, array) : 
        aleatorio
    }
    
    function gerarNumeros(qted){
        const numeros = Array(qted)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumerosNaoContido(1, 60, nums);
            return [...nums, novoNumero];
        }, [])
        .sort((n1, n2) => n1 - n2);
    
        return numeros;
    }
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde);
    const [numeros, setNumeros] = useState(numerosIniciais);

    return(
        <div className='Mega'>
            <h2>Mega Sena - Surpresinha</h2>
            <h3>{numeros.join('-')}</h3>
            <div>
                <label>Qtde de Numeros</label>
                <input type="number" 
                       value={qtde}
                       onChange={(e) => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))
                        }} />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar</button>
        </div>
    )
}