import React from 'react';
import { Container, Content, Image, Media, Button } from './styles';

const Card = ({ title, text, img, color, button, onClickButton, expanded }) => (
  <Container>
    <Media color={color}>
      <Image src={img} />
      {title}
    </Media>
    <Content>
      {text}
      {expanded && <Content>Texto extra aqui</Content>}
      <Button color={color} onClick={onClickButton}>{button}</Button>
    </Content>
  </Container>
);
export default Card;