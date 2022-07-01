import React, { Component } from 'react'
import styled from 'styled-components'
import Facebook from '../../Imagem/Facebook.png'
import Twitter from '../../Imagem/Twitter.png'
import Instagram from '../../Imagem/Instagram.png'
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

const Footer = styled.div`
    /* background-color: #8A93A6; */
    background-color: #70BF63;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    bottom: 0;
    position: fixed;
`
const ClickSocialMedia = styled.div`

`
const ImagemFundo = styled.img`
    margin: 0 10px;
    width: 2%;
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
                <Footer>
                    <p>Copyright © 2022 LabeNinja.<br /> Todos os direitos reservados.</p>
                    
                  <ImagemFundo src={Facebook} to ="https://www.instagram.com/"></ImagemFundo>
                    <ImagemFundo src={Twitter}></ImagemFundo>
                    <ImagemFundo src={Instagram}></ImagemFundo>
                </Footer>
            </Container>
        )
    }
}
