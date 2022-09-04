import React from "react";
import produtos from '../../data/produtos'

export default function TabelaProdutos(props){
    const listprod = produtos.map(produtos =>{
        return(
            <li key={produtos.id}>
                {produtos.id} {produtos.produto} {produtos.preco}
            </li>
        );
    });
    return (
        <div>
            <ul style={{listStyle:'none'}}>
                {listprod}
            </ul>
        </div>
    )
}