import React, { Component } from 'react'
import styled from 'styled-components'
import Casinha from '../../Imagem/Home.png'
import Logo from '../../Imagem/header.png'
import Carrinho from '../../Imagem/Carrinho.png'

const ImagemLogo = styled.img`
  width: 4%;
`
const ImagemCab = styled.img`
  width: 2%;
  margin: 10px 0;
  opacity: 0.7;
  :hover {
    cursor: pointer;
    opacity: 1;
  }
`

const Main = styled.div`
  background-color: #70BF63;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15%;
  height: 8vh;
`

export default class Header extends Component {
    render() {
        return (
            <Main>
                <ImagemCab src={Casinha} onClick={() => this.props.appSwitcher('home')}></ImagemCab>
                
                <ImagemCab src={Carrinho} onClick={() => this.props.appSwitcher('carrinho')}></ImagemCab>
            </Main>
        )
    }
}
