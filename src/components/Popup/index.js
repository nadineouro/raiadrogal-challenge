import React from 'react';
import { Container, PopupContainer, PopupContent, Button } from './styles'

const Popup = ({ open, onClose, text }) => {
  return (
    <Container open={open}>
      <PopupContainer>
        <PopupContent>
          {text}
        </PopupContent>
        <Button onClick={onClose}>Fechar</Button>        
      </PopupContainer>
    </Container>
  );
}
export default Popup;