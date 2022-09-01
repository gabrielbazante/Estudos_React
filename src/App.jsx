import React from "react";
import "./App.css"

import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import Usuarioinfo from "./components/condicional/Usuarioinfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Mega from "./components/mega/Mega";

export default function App(props) {
    return (
        <div className='App'>
            <h1>Fundamdentos React</h1>

            <div className="Cards">
                <Card titulo="#13 - Mega Sena" color="#1499D3">
                    <Mega qtde={7}></Mega>
                </Card>
                <Card titulo="#12 - Contador" color="#424242">
                    <Contador numeroInicial={10}></Contador>
                </Card>
                <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                    <Input></Input>
                </Card>
                <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo="#09 - Comunicação Direta" color="#59323C">
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo="#08 - Renderização Condicional" color="purple">
                    <ParOuImpar numero={20}></ParOuImpar>
                    <Usuarioinfo usuario={{nome: 'Gabriel'}}></Usuarioinfo>
                </Card>
                <Card titulo="#07 - Repetição Tabela" color="green">
                    <TabelaProdutos></TabelaProdutos>
                </Card>
                <Card titulo="#06 - Repetição" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com Filhos" color="red">
                    <Familia sobrenome="Bazante">
                        <FamiliaMembro nome="Gabriel"></FamiliaMembro>
                        <FamiliaMembro nome="Amanda"></FamiliaMembro>
                        <FamiliaMembro nome="Camila"></FamiliaMembro>
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio max={100} min={0}></Aleatorio>
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo="#02 - Com Parametro" color="#E8B71A">
                    <ComParametro
                        titulo="Segundo componente"
                        subtitulo="Muito legal">
                    </ComParametro>
                </Card>

                <Card titulo="#01 - Primeiro" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}