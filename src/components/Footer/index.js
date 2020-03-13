import React from 'react';
import { Container, FooterItem, Image } from './styles'
import raia from '../../resources/images/logo_drogaraia.png'
import drogasil from '../../resources/images/logo_drogasil.png'
import farmasil from '../../resources/images/logo_farmasil.png'
import univers from '../../resources/images/logo_univers.png'
import fourbio from '../../resources/images/logo_4bio.png'
import logo from '../../resources/images/logo_small.png'

const Footer = () => {
  const footerList = [ raia, drogasil, farmasil, univers, fourbio]
  return (
    <Container>
      <FooterItem>
        RD 2017. Todos os direitos reservados
      </FooterItem>
      <FooterItem flex={2}>
        {footerList.map(item => <Image key={item} src={item} />)}
      </FooterItem>
      <FooterItem>
        <Image src={logo} />
      </FooterItem>
    </Container>
  );
}

export default Footer;