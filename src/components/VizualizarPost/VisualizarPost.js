import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import PostDetalhado from '../PostDetalhado/PostDetalhado'
import Facebook from '../../Imagem/Facebook.png'
import Twitter from '../../Imagem/Twitter.png'
import Instagram from '../../Imagem/Instagram.png'

const Busca = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 80px;
`
const Container = styled.div`
  text-align: center;
  align-items: center;
`

const Card = styled.div`
  display: flex;
  margin: 50px 0px 50px 65px;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const Trabalho = styled.div`
  margin: 30px;
  border: 1px solid black;
  padding: 20px 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px RGB(128, 126, 126);
  width: 14vw;
  background-color: #F2D0A7;
  border-color: #F2D0A7;
`

const Title = styled.h3`
margin: 0;
overflow: hidden;
text-overflow: ellipsis;
opacity: 0.7;
:hover{
    cursor: pointer;
    opacity: 1;
}
`

const Botao = styled.button`
  background-color: #70BF63;
  color: white;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  border-color: #70BF63;
  margin: 5px;
  font-weight: bold;
  :hover{
    cursor: pointer;
    background-color: white;
    color: #70BF63;
}
`

const TextoGrifado = styled.strong`
  color: RGB(94, 93, 93);
`

const Texto = styled.p`
  color: RGB(94, 93, 93);
`
const Footer = styled.div`
  background-color: #70BF63;
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

export default class VisualizarPost extends Component {

  state = {

    nome: '',
    valorMinimo: '',
    valorMaximo: '',
    ordenacao: 'crecente',
    listaDePost: [],

    telas: true,

  }

  componentDidMount() {
    this.getAllJobs()
  }

  pesquisaNome = (event) => {
    this.setState({ nome: event.target.value })
  }

  pesquisaPrecoMinimo = (event) => {
    this.setState({ valorMaximo: event.target.value })
  }

  pesquisaPrecoMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value })
  }

  ordenacao = (event) => {
    this.setState({ ordenacao: event.target.value })
  }

  getAllJobs = () => {

    axios.get(`https://labeninjas.herokuapp.com/jobs`, {
      headers: {
        'Authorization': 'e2190c39-7930-4db4-870b-bed0e5e4b88e'
      }
    }).then(resposta => {
      this.setState({ listaDePost: resposta.data.jobs })
    }).catch(erro => {
      console.log(erro.response.data.message)
    })
  }

  trocaTelaDetalhe = (id) => {
    this.setState({ telas: false, idPost: id })
  }

  trocaTelaLista = () => {
    this.setState({ telas: true })
    
  }

  render() {

    const novaLista = this.state.listaDePost.filter(item => {
      return item.title.toLowerCase().includes(this.state.nome.toLowerCase())
    }).filter(item => {
      return this.state.valorMinimo === '' || item.price >= this.state.valorMinimo
    }).filter(item => {
      return this.state.valorMaximo === '' || item.price <= this.state.valorMaximo
    }).sort((item1, item2) => {
      switch (this.state.ordenacao) {
        case "crecente":
          return item1.price - item2.price
        case "decrecente":
          return item2.price - item1.price
        case 'titulo':
          return item1.title.localeCompare(item2.title)
        case 'prazo':
          return new Date(item1.dueDate).getTime() - new Date(item2.dueDate).getTime();
        default:
          break
      }
    }).map((Card) => {
      return <Trabalho key={Card.id}>
        <Title onClick={() => this.props.appSwitcher('carrinho')}>{Card.title}</Title>
        <Texto><TextoGrifado>Data: </TextoGrifado>{new Date(Card.dueDate).toLocaleDateString()}</Texto>
        <Texto><TextoGrifado>Preço:</TextoGrifado> {Card.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Texto>
        <Botao onClick={() => this.trocaTelaDetalhe(Card.id)}>Detalhe</Botao>
        <Botao onClick={() => this.props.addService(Card.title, Card.dueDate, Card.price)}>Adicionar</Botao>
      </Trabalho>
    })

    let trocaTela
    switch (this.state.telas) {

      case true:
        trocaTela = <div>
          <Busca>
            <input onChange={this.pesquisaNome} type="text" placeholder="Nome"></input>
            <input onChange={this.pesquisaPrecoMinimo} type="number" placeholder="R$ Valor Mínimo"></input>
            <input onChange={this.pesquisaPrecoMaximo} type="number" placeholder="R$ Valor Máximo"></input>
            <select onChange={this.ordenacao}>
              <option value="crecente">Preço Crecente</option>
              <option value="decrecente">Preço Decrecente</option>
              <option value="titulo">Titulo</option>
              <option value="prazo">Prazo</option>
            </select>
          </Busca>

          <Card>
            {novaLista}
          </Card>

          <Footer>
            <p>Copyright © 2022 LabeNinja.<br /> Todos os direitos reservados.</p>
            <ImagemFundo src={Facebook}></ImagemFundo>
            <ImagemFundo src={Twitter}></ImagemFundo>
            <ImagemFundo src={Instagram}></ImagemFundo>
          </Footer>
        </div>
        break;

      case false:
        trocaTela = <div>
          <PostDetalhado
            trocarTelaLista={this.trocaTelaLista}
            teste={this.state.idPost}
          />
        </div>
        break;
      default:
        break;
    }
    return (
      <Container>
        {trocaTela}
      </Container>
    )
  }
}
