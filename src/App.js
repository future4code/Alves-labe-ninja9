import React, { Component } from 'react'
import VizualizarPost from './components/VizualizarPost/VisualizarPost.js'
import SwitchComponents from './components/SwitchComponents/SwitchComponents.js'
import Carrinho from './components/Carrinho/Carrinho.js'
import Cadastrar from './components/Cadastrar/Cadastrar.js'
import imgCart from './img/Cart.png'
import imgHome from './img/Home.png'
import styled from 'styled-components'


const Nav = styled.nav`
width: 100%;
display:flex;
justify-content: space-between;
background-color: #70BF63;
border-bottom:1px solid black;
`

const Button = styled.button`
width: 5%;
background:none;
border: none;
cursor:pointer;

`

const Img = styled.img`
width: 100%

`

export default class App extends Component {
  state = {
    activeComponent: 'cadastrar',
  }

  appSwitcher = (nome) => {
    this.setState({ activeComponent: nome })
  }


  render() {
    return (
      <div>
          <Nav>
              <Button onClick={() => this.props.changePage("inicial")}><Img src={imgHome}/></Button>
              <Button onClick={() => this.props.changePage("carrinho")}><Img src={imgCart}/></Button>
          </Nav>

        <SwitchComponents active={this.state.activeComponent}>
          <VizualizarPost name='loja' appSwitcher={this.appSwitcher}></VizualizarPost>
          <Carrinho name='carrinho' appSwitcher={this.appSwitcher}></Carrinho>
          <Cadastrar name='cadastrar' appSwitcher={this.appSwitcher}></Cadastrar>
          {/* <Home name='home'></Home>
          <Detalhes name='detalhes'></Detalhes> */}
        </SwitchComponents>

      </div>
      
    )
  } 
}

