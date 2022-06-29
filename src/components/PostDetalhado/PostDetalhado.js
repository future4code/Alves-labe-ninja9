import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Casinha from '../../Imagem/Home.png'
import Logo from '../../Imagem/labeninjas2.png'
import Carrinho from '../../Imagem/Carrinho.png'
import Facebook from '../../Imagem/Facebook.png'
import Twitter from '../../Imagem/Twitter.png'
import Instagram from '../../Imagem/Instagram.png'


const Trabalho = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: Arial, Helvetica, sans-serif;
`
const Card = styled.div`
  border: 1px solid black;
  width: 20%;
  border: 1px solid black;
  padding: 20px 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px RGB(128, 126, 126);
  text-align: center;
  margin: 10px 0px;
  background-color: #F2D0A7;
  border-color: #F2D0A7;
`
const TextoGrifado = styled.strong`
  color: RGB(94, 93, 93);
`

const Texto = styled.p`
  color: RGB(94, 93, 93);
`

const Botao = styled.button`
  background-color: #70BF63;
  color: white;
  width: 150px;
  height: 30px;
  border-radius: 10px;
  border-color: #70BF63;
  :hover{
    cursor: pointer;
    background-color: white;
    color: #70BF63;
}
`

const BotaoAutomatico = styled.button`
  opacity: 0;
`

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

const Main = styled.div`
  margin-top: 150px;
`

export default class PostDetalhado extends Component {

  state = {
    detalhe: [],
  }

  getJobById = (id) => {
    axios.get(`https://labeninjas.herokuapp.com/jobs/${id}`, {
      headers: {
        'Authorization': 'e2190c39-7930-4db4-870b-bed0e5e4b88e'
      }
    }).then(response => {
      let novaLista = [response.data]
      this.setState({ detalhe: novaLista })

      console.log(response.data)

      // console.log(listaAtualizada)
    }).catch(error => {
      console.log(error.response.data.error)
    })
  }


  render() {

    const listaDetalhada = this.state.detalhe.map(item => {
      return <Trabalho key={item.id}>
        <Card>
          <h1>{item.title}</h1>
          <Texto><TextoGrifado>Forma de Pagamento:</TextoGrifado> {item.paymentMethods}</Texto>
          <Texto><TextoGrifado>Preço:</TextoGrifado> {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Texto>
          <Texto><TextoGrifado>Data:</TextoGrifado> {new Date(item.dueDate).toLocaleDateString()}</Texto>
          <Texto><TextoGrifado>Descrição:</TextoGrifado> {item.description}</Texto>
          <Botao onClick={this.props.trocarTelaLista}>Voltar</Botao>
        </Card>
      </Trabalho>
    })

    return (
      <div>

        <Header>
          <ImagemCab src={Casinha}></ImagemCab>
          <ImagemLogo src={Logo}></ImagemLogo>
          <ImagemCab src={Carrinho}></ImagemCab>
        </Header>

        <Main>
          {listaDetalhada}
          <BotaoAutomatico onClick={this.getJobById(this.props.VisualizarInfo)}>Detalhe</BotaoAutomatico>
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
