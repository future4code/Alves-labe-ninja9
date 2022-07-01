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
const BotaoDelete = styled.button`
background-color: #70BF63;
color: white;
border-color: #70BF63;
border-radius:10px;
margin: 5px;
:hover{
background-color: white;
color: #70BF63;
}
`
const Botao = styled.button`
  background-color: #70BF63;
  color: white;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  border-color: #70BF63;
  margin: 5px;
  font-weight: bold;
  :hover{
    cursor: pointer;
    background-color: white;
    color: #70BF63;
}
`

const Title2 = styled.h2`
font-size: 2rem;
color: #4A4A4A;
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
const Container = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
`

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export default class Carrinho extends Component {
  render() {
    const novaLista = this.props.carItems.map(item => {
      return <Trabalho key={item.id}>
        <p>{item.quantidade}x</p>
        <Title>{item.nome}</Title>
        <Texto><TextoGrifado>Data: </TextoGrifado>{new Date(item.data).toLocaleDateString()}</Texto>
        <Texto><TextoGrifado>Preço:</TextoGrifado> {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Texto>
        <BotaoDelete onClick={() => this.props.removeService(item.nome, item.data, item.preco, item.quantidade)}>Excluir serviço</BotaoDelete>
      </Trabalho>
    })

    return (
      <Main>
        <Title2>Carrinho</Title2>
        <Container>
          {novaLista}
        </Container>
        <Botao onClick={() => this.props.appSwitcher('loja')}>Voltar</Botao>
      </Main>

    )
  }
}
