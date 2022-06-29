import React, { Component } from 'react'
import VizualizarPost from './components/VizualizarPost/VisualizarPost.js'
import SwitchComponents from './components/SwitchComponents/SwitchComponents.js'
import Carrinho from './components/Carrinho/Carrinho.js'
import Cadastrar from './components/Cadastrar/Cadastrar.js'
import Home from './components/Home/Home'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
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
      <Container>
        <SwitchComponents active={this.state.activeComponent}>
          <VizualizarPost name='loja' appSwitcher={this.appSwitcher}></VizualizarPost>
          <Carrinho name='carrinho' appSwitcher={this.appSwitcher}></Carrinho>
          <Cadastrar name='cadastrar' appSwitcher={this.appSwitcher}></Cadastrar>
          <Home name='home'></Home>
          {/* <Detalhes name='detalhes'></Detalhes> */}
        </SwitchComponents>
      </Container>
    )
  }
}

