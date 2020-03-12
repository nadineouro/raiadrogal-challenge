import React from 'react';
import { Container, Content, Image, Media } from './styles';

const Card = ({title, text, img, color}) => (
  <Container>
    <Media color={color}>
      <Image src={img} />
      {title}
    </Media>
    <Content>
      {text}
    </Content>
  </Container>
);
export default Card;