import React, { Component } from "react";
import VizualizarPost from "./components/VizualizarPost/VisualizarPost.js";
import SwitchComponents from "./components/SwitchComponents/SwitchComponents.js";
import Carrinho from "./components/Carrinho/Carrinho.js";
import Cadastrar from "./components/Cadastrar/Cadastrar.js";

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
    activeComponent: "cadastrar",
    carItems: [
    
    ],

  };

  appSwitcher = (nome) => {
    this.setState({ activeComponent: nome });
  };
  addService = (nome, data, preco) => {
    const newCarItems = this.state.carItems.map((objeto) => {
      if (objeto.nome === nome) {
        console.log(objeto.quantidade)
        return { ...objeto, quantidade: objeto.quantidade + 1 };
      }
      return objeto 
    });
    this.setState({carItems: newCarItems})
    const nameItems = this.state.carItems.map((objeto) => {
      return objeto.nome;
    });
    this.appSwitcher("carrinho");
    if (nameItems.includes(nome)) {
      return 
    }
    const newCarItem = {
      nome: nome,
      data: data,
      preco: preco,
      quantidade: 1,
    };
    
    const newCarItems2 = [...this.state.carItems, newCarItem]
    this.setState({carItems: newCarItems2})
    
    console.log(newCarItems)
 };

  render() {
    return (

      <div>
          <Nav>
              <Button onClick={() => this.props.changePage("inicial")}><Img src={imgHome}/></Button>
              <Button onClick={() => this.props.changePage("carrinho")}><Img src={imgCart}/></Button>
          </Nav>


      <Container>

        <SwitchComponents active={this.state.activeComponent}>
          <VizualizarPost
            name="loja"
            appSwitcher={this.appSwitcher}
            addService={this.addService}
          ></VizualizarPost>
          <Carrinho
            name="carrinho"
            appSwitcher={this.appSwitcher}
            carItems={this.state.carItems}
          ></Carrinho>
          <Cadastrar
            name="cadastrar"
            appSwitcher={this.appSwitcher}
          ></Cadastrar>
          {/* <Home name='home'></Home>
          <Detalhes name='detalhes'></Detalhes> */}
        </SwitchComponents>
      </Container>

    )
}
