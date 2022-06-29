import React, { Component } from 'react'
import styled from 'styled-components'
import Casinha from '../../Imagem/Home.png'
import Logo from '../../Imagem/labeninjas2.png'
import Carrinho from '../../Imagem/Carrinho.png'
import Facebook from '../../Imagem/Facebook.png'
import Twitter from '../../Imagem/Twitter.png'
import Instagram from '../../Imagem/Instagram.png'

const Header = styled.div`
    background-color: #70BF63;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const ImagemCab = styled.img`
    width: 2%;
    margin: 10px 0;
`

const ImagemLogo = styled.img`
    width: 4%;
`

const Main = styled.div`
    text-align: center;
    background-image: url(${Logo});
    height: 80vh;
`

const Footer = styled.div`
    background-color: #8A93A6;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    bottom: 0;
    position: fixed;
`

const ImagemFundo = styled.img`
    margin: 0 10px;
    width: 2%;
`
const Botao = styled.button`
  background-color: #70BF63;
  color: white;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  border-color: #70BF63;
  margin: 60px 0px 0px 40px;
  :hover{
    cursor: pointer;
    background-color: white;
    color: #70BF63;
}
`

const Botao2 = styled.button`
  background-color: #70BF63;
  color: white;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  border-color: #70BF63;
  margin: 60px 110px;
  :hover{
    cursor: pointer;
    background-color: white;
    color: #70BF63;
}
`

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header>
                    <ImagemCab src={Casinha}></ImagemCab>
                    <ImagemLogo src={Logo}></ImagemLogo>
                    <ImagemCab src={Carrinho}></ImagemCab>
                </Header>
                <Main>
                    <Botao>Contratar Serviço</Botao>
                    <Botao2>Cadastra Serviço</Botao2>
                </Main>
                <Footer>
                    <p>Copyright © 2022 LabeNinja.<br /> Todos os direitos reservados.</p>
                    <ImagemFundo src={Facebook}></ImagemFundo>
                    <ImagemFundo src={Twitter}></ImagemFundo>
                    <ImagemFundo src={Instagram}></ImagemFundo>
                </Footer>
            </div>
        )
    }
}
