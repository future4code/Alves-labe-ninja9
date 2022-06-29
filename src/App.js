import React, { Component } from 'react'
import VizualizarPost from './components/VizualizarPost/VisualizarPost.js'
import SwitchComponents from './components/SwitchComponents/SwitchComponents.js'
import Carrinho from './components/Carrinho/Carrinho.js'
import Cadastrar from './components/Cadastrar/Cadastrar.js'

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

