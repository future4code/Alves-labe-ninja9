import React, { Component } from 'react'
import styled from 'styled-components'
import BackgroundImg from '../../Imagem/background.png'

const Main = styled.div`
display: flex;
gap: 20%;
justify-content: center;
`
const ImagemLogo = styled.img`
width: 22%;
margin-top: 5%;
`

const ImagemFundo = styled.img`
    margin: 0 10px;
    width: 12%;
`
const Botao = styled.button`
  background-color: #70BF63;
  color: white;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border-color: #70BF63;
  margin: 60px 0px 0px;
  :hover{
    cursor: pointer;
    background-color: white;
    color: #70BF63;
}
`

const Container = styled.div`
display: flex;
flex-direction: column; 
align-items: center;
`

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Main>
                    <Botao onClick={() => this.props.appSwitcher('loja')}>Contratar Serviço</Botao>
                    <Botao onClick={() => this.props.appSwitcher('cadastrar')}>Cadastra Serviço</Botao>
                </Main>
                <ImagemLogo src={BackgroundImg} />
            </Container>
        )
    }
}
