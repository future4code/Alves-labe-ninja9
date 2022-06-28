import React, { Component } from 'react'

export default class Carrinho extends Component {
  render() {
    return (
      <div>
        <h3>Carrinho</h3>
        <button onClick={this.props.appSwitcher}>Voltar</button>
      </div>
      
    )
  }
}
