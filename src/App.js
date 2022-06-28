import React, { Component } from 'react'
import styled from 'styled-components'
import VizualizarPost from './components/VizualizarPost/VisualizarPost.js'
import axios from 'axios'
import SwitchComponents from './components/VizualizarPost/SwitchComponents/SwitchComponents.js'
import Carrinho from './components/VizualizarPost/Carrinho/Carrinho.js'

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

  appSwitcher = () => {
    if (this.state.activeComponent === 'loja') {
      this.setState({ activeComponent: 'carrinho' })
    } else if ( this.state.activeComponent === 'carrinho') {
      this.setState({ activeComponent: 'loja' })
    }
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

