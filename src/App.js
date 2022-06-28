import React, { Component } from 'react'
import styled from 'styled-components'
import VizualizarPost from './components/VizualizarPost/VisualizarPost.js'
import axios from 'axios'

const Main = styled.div`
display: flex;
`
const Container = styled.div`
display: flex;
`
export default class App extends Component {
  render() {
    return (
      <Main>
        <VizualizarPost>
        </VizualizarPost>
      </Main>
    )
  }
}

