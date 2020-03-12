import React from 'react';
import { Container, Image, Nav, Item } from './styles';
import logo from '../../resources/images/logo.png';

const Header = () => {
  const techs = ['HTML5', 'CSS3', 'JAVASCRIPT', 'REACT', 'REDUX'];
  return (
    <Container>
      <Image src={logo}/>
      <Nav>
        {techs.map(tech => <Item key={tech} href='#'>{tech}</Item>)}
      </Nav>
    </Container>
  );
};

export default Header;