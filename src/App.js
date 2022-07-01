import React, { Component } from "react";
import VizualizarPost from "./components/VizualizarPost/VisualizarPost.js";
import SwitchComponents from "./components/SwitchComponents/SwitchComponents.js";
import Carrinho from "./components/Carrinho/Carrinho.js";
import Cadastrar from "./components/Cadastrar/Cadastrar.js";
import Home from "./components/Home/Home.js";
import styled from "styled-components";
import Header from "./components/Header/Header.js";

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
`;
const t=styled.div`
`

export default class App extends Component {
  state = {
    activeComponent: "home",
    carItems: [],
  };

  appSwitcher = (nome) => {
    this.setState({ activeComponent: nome });
  };
  removeService = (nome, data, preco, quantidade) => {
    if (quantidade <= 1) {
      const novoArray = this.state.carItems.filter((objeto) => {
        return objeto.nome !== nome;
      
      });
      this.setState({carItems: novoArray})
      return 
    }

    const removeItem = this.state.carItems.map((objeto) => {
      if (objeto.nome === nome) {
        return {
          ...objeto,
          quantidade: objeto.quantidade - 1,
          preco: objeto.preco - preco,
        };
      }
      return objeto;
    });
    this.setState({ carItems: removeItem });
  };

  addService = (nome, data, preco) => {
    const newCarItems = this.state.carItems.map((objeto) => {
      if (objeto.nome === nome) {
        console.log(objeto.quantidade);
        return {
          ...objeto,
          quantidade: objeto.quantidade + 1,
          preco: objeto.preco + preco,
        };
      }
      return objeto;
    });
    this.setState({ carItems: newCarItems });
    const nameItems = this.state.carItems.map((objeto) => {
      return objeto.nome;
    });
    this.appSwitcher("carrinho");
    if (nameItems.includes(nome)) {
      return;
    }
    const newCarItem = {
      nome: nome,
      data: data,
      preco: preco,
      quantidade: 1,
    };

    const newCarItems2 = [...this.state.carItems, newCarItem];
    this.setState({ carItems: newCarItems2 });

    console.log(newCarItems);
  };

  render() {
    return (
      <div>
        <Header appSwitcher={this.appSwitcher}></Header>
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
              removeService={this.removeService}
            ></Carrinho>
            <Cadastrar
              name="cadastrar"
              appSwitcher={this.appSwitcher}
            ></Cadastrar>
            <Home name="home" appSwitcher={this.appSwitcher}></Home>
          </SwitchComponents>
        </Container>
      </div>
    );
  }
}
