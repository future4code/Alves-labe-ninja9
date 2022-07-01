import React, { Component } from 'react'
import styled from 'styled-components'
import Facebook from '../../Imagem/Facebook.png'
import Twitter from '../../Imagem/Twitter.png'
import Instagram from '../../Imagem/Instagram.png'

const ContainerFooter = styled.div`
    background-color: #70BF63;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    bottom: 0;
    position: fixed;
`

const SocialContainer = styled.div`
    width: 17%;
`

const Copy = styled.p`
    margin-left: 20px;
    color: white;
    font-weight: bold;
    font-size: 0.75rem;
`

const ImagemFundo = styled.img`
    margin: 0 10px;
    width: 14%;
`

export default class Footer extends Component {
    render() {
        return (
            <ContainerFooter>
                <Copy>Copyright © 2022 LabeNinja.<br /> Todos os direitos reservados.</Copy>
                <SocialContainer>
                    <a target="_blank" href="http://facebook.com"><ImagemFundo src={Facebook}></ImagemFundo></a>
                    <a target="_blank" href="http://twitter.com"><ImagemFundo src={Twitter}></ImagemFundo></a>
                    <a target="_blank" href="http://instagram.com"><ImagemFundo src={Instagram}></ImagemFundo></a>
                </SocialContainer>
            </ContainerFooter>
        )
    }
}
