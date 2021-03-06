import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Facebook from '../../Imagem/Facebook.png'
import Twitter from '../../Imagem/Twitter.png'
import Instagram from '../../Imagem/Instagram.png'

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

const MainContainer = styled.div`
  color: #4A4A4A;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  text-align: left;
  margin: 2% 30%;
  h2 {
  align-self: center;
  font-size: 2rem;
}

`
const Botao = styled.button`
  background-color: #70BF63;
  color: white;
  width: 500px;
  height: 30px;
  border-radius: 10px;
  border-color: #70BF63;
  :hover{
    cursor: pointer;
    background-color: white;
    color: #70BF63;
}
`

const Titulo = styled.h2`
text-align: center;

`

export const Checkbox = styled.div` 
  text-align: left;
`
export const P = styled.p` 
  margin-top: 2%;
  color: #6e6e6e;
`
export const Pagamento = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 2% 0;
    text-align: left;
    color: #6e6e6e;
  }
`
export const Form = styled.form` 
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 3%;
`
export default class Cadastrar extends Component {
  state = {
    inputTitle: "",
    inputDescription: "",
    inputPrice: "",
    inputPayment: [],
    inputDate: ""
  }
  handleInputTitle = (event) => {
    this.setState({ inputTitle: event.target.value })
  }

  handleInputDescription = (event) => {
    this.setState({ inputDescription: event.target.value })
  }

  handleInputPrice = (event) => {
    this.setState({ inputPrice: event.target.value })
  }

  handleInputPayment = (event) => {
    const newPayment = [...this.state.inputPayment]
    newPayment.push(event.target.value)
    this.setState({ inputPayment: newPayment })
  }

  handleInputDate = (event) => {
    this.setState({ inputDate: event.target.value })
  }


  createJob = (event) => {
    const url = 'https://labeninjas.herokuapp.com/jobs'
    const body = {
      title: this.state.inputTitle,
      description: this.state.inputDescription,
      price: Number(this.state.inputPrice),
      paymentMethods: this.state.inputPayment,
      dueDate: this.state.inputDate
    }
    const auth = { headers: { Authorization: 'e2190c39-7930-4db4-870b-bed0e5e4b88e' } }
    axios.post(url, body, auth)
      .then((response) => {
        alert(response.data.message)
        this.setState({
          inputTitle: "",
          inputDescription: "",
          inputPrice: "",
          inputPayment: [],
          inputDate: ""
        })
      })
      .catch((error) => alert(error))
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <MainContainer>
          <Titulo>Cadastre o seu servi??o</Titulo>
          <input
            required
            id="standard-required"
            placeholder="T??tulo do Servi??o*"
            value={this.state.inputTitle}
            onChange={this.handleInputTitle}
          />
          <br />
          <input
            required
            id="standard-required"
            placeholder="Descri????o*"
            value={this.state.inputDescription}
            onChange={this.handleInputDescription}
          />
          <br />
          <input
            required
            id="standard-required"
            placeholder="Valor*"
            value={this.state.inputPrice}
            onChange={this.handleInputPrice}
          />
          <Pagamento>
            <p>Formas de Pagamento</p>
            <Form value={this.state.inputPayment} onChange={this.handleInputPayment}>
              <Checkbox>
                <input
                  type="checkbox"
                  id="Pix"
                  name="Pix"
                  value="Pix"
                />
                <label> Pix</label>
              </Checkbox>
              <Checkbox>
                <input
                  type="checkbox"
                  id="cartaocredito"
                  name="Cart??o de Cr??dito"
                  value="Cart??o de Cr??dito"
                />
                <label> Cart??o de Cr??dito</label>
              </Checkbox>
              <Checkbox>
                <input
                  type="checkbox"
                  id="cartaodebito"
                  name="Cart??o de D??bito"
                  value="Cart??o de D??bito"
                />
                <label> Cart??o de D??bito</label>
              </Checkbox>
              <Checkbox>
                <input
                  type="checkbox"
                  id="boleto"
                  name="Boleto"
                  value="Boleto"
                />
                <label> Boleto</label>
              </Checkbox>
            </Form>
          </Pagamento>
          <p>Estou dispon??vel para esse servi??o at??:</p>
          <input
            id="date"
            label="Escolha um a data"
            type="date"
            value={this.state.inputDate}
            onChange={this.handleInputDate}
          />
          <br />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0 1.08755rem 1.45rem`,
            }}
          >
            <Botao onClick={this.createJob}>Cadastrar</Botao>
          </div>
        </MainContainer>
      </div>
    )
  }
}
