import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'


const MainContainer = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
  margin: auto

`

const Titulo = styled.h2`
text-align: center;

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
    const auth = { headers: { Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e" } }
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
      <MainContainer>
        <Titulo>Cadastro</Titulo>

      
          <input
            required
            id="standard-required"
            placeholder="Nome"
           
            value={this.state.inputTitle}
            onChange={this.handleInputTitle}
          />
       

       
          <input
            required
            id="standard-required"
            placeholder="Descrição"
            defaultValue=""
            value={this.state.inputDescription}
            onChange={this.handleInputDescription}
          />
       

        
          <input
            required
            id="standard-required"
            placeholder="Valor R$"          
            value={this.state.inputPrice}
            onChange={this.handleInputPrice}
          />
        

        <div>
          <Titulo>Formas de Pagamento</Titulo>

          <form value={this.state.inputPayment} onChange={this.handleInputPayment}>
              <input
                type="checkbox"
                id="Pix"
                name="Pix"
                value="Pix"
              />
              <label for="Pix"> Pix</label>

              <input
                type="checkbox"
                id="cartaocredito"
                name="Cartão de Crédito"
                value="Cartão de Crédito"
              />
              <label for="cartaocredito"> Cartão de Crédito</label>

            
              <input
                type="checkbox"
                id="cartaodebito"
                name="Cartão de Débito"
                value="Cartão de Débito"
              />
              <label for="cartaodebito"> Cartão de Débito</label>
            

            
              <input
                type="checkbox"
                id="boleto"
                name="Boleto"
                value="Boleto"
              />
              <label for="boleto"> Boleto</label>
            

          </form>
          
        </div>

        
          <p>Estou disponível para esse serviço até:</p>
          <input
            id="date"
            label="Escolha um a data"
            type="date"
            defaultValue={Date.now()}
            value={this.state.inputDate}
            onChange={this.handleInputDate}
          />
        

        <button onClick={this.createJob}>Cadastrar</button>

      </MainContainer>
    )
  }
}
