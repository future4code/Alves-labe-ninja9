import React, { Component } from 'react'
import styled from 'styled-components'
import VizualizarPost from './components/VizualizarPost/VisualizarPost.js'
import axios from 'axios'
import SwitchComponents from './components/SwitchComponents/SwitchComponents.js'
import Carrinho from './components/Carrinho/Carrinho.js'

const Main = styled.div`
display: flex;
`
const Container = styled.div`
display: flex;
`
export default class App extends Component {
  state = {
    activeComponent: 'loja',
  }

  appSwitcher = (nome) => {
    this.setState({ activeComponent: nome })
  }


  render() {
    return (
      <Main>
        <SwitchComponents active={this.state.activeComponent}>
          <VizualizarPost name='loja' appSwitcher={this.appSwitcher}></VizualizarPost>
          <Carrinho name='carrinho' appSwitcher={this.appSwitcher}></Carrinho>
          {/* <Home name='home'></Home>
          <Detalhes name='detalhes'></Detalhes>
          <Cadastrar name='cadastrar'></Cadastrar> */}
        </SwitchComponents>
      </Main>
    )
  }
}

