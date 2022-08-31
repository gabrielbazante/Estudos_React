import React from "react";
import produtos from '../../data/produtos';
import './TabelaProdutos.css'

export default props => {
    const line = produtos.map((produto, i) => {
        return (
                <tr className= {i % 2 === 0 ? "Par" : ""} key={produto.id}>
                    <td>
                        {produto.id}
                    </td>
                    <td>
                        {produto.produto}
                    </td>
                    <td>
                       R$ {produto.preco}
                    </td>
                </tr>
        );
    });                
    return (
        <div className="TabelaProdutos">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
                    {line}
            </table>
        </div>
    )
}