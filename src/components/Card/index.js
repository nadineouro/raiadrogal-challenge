import React from 'react';
import { Container, Content, Image, Media, ButtonContainer, Button } from './styles';

const Card = ({ title, text, img, color, button, onClickButton }) => (
  <Container>
    <Media color={color}>
      <Image src={img} />
      {title}
    </Media>
    <Content>
      {text}
      <ButtonContainer>
        <Button color={color} onClick={onClickButton}>{button}</Button>
      </ButtonContainer>
    </Content>
  </Container>
);
export default Card;