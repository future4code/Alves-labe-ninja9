import React, { Component } from 'react'
import styled from 'styled-components'


const Title = styled.h3`
margin: 0;
overflow: hidden;
text-overflow: ellipsis;
opacity: 0.7;
:hover{
    cursor: pointer;
    opacity: 1;
}
`
const Texto = styled.p`
  color: RGB(94, 93, 93);
`
const TextoGrifado = styled.strong`
  color: RGB(94, 93, 93);
`
const Botao = styled.button`
  background-color: #70BF63;
  color: white;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  border-color: #70BF63;
  margin: 5px;
  :hover{
    cursor: pointer;
    background-color: white;
    color: #70BF63;
}

`
const Trabalho = styled.div`
  margin: 30px;
  border: 1px solid black;
  padding: 20px 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px RGB(128, 126, 126);
  width: 14vw;
  background-color: #F2D0A7;
  border-color: #F2D0A7;
`

export default class Carrinho extends Component {
  render() {
    const novaLista = this.props.carItems.map(item => {
    
      return <Trabalho key={item.id}>
        <p>{item.quantidade}</p>
        <Title>{item.nome}</Title>
        <Texto><TextoGrifado>Data: </TextoGrifado>{new Date(item.data).toLocaleDateString()}</Texto>
        <Texto><TextoGrifado>Preço:</TextoGrifado> {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Texto>
      </Trabalho>
 
    })

    return (
      <div>
        <h3>Carrinho</h3>
       {novaLista}
       
        <button onClick={() => this.props.appSwitcher('loja')}>Voltar</button>
      
      </div>
      
    )
  }
}
