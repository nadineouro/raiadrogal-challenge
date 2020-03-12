import React from 'react';
import desktop from '../../resources/images/desktop-responsive-design.png';
import mobile from '../../resources/images/mobile-responsive-design.png';
import tablets from '../../resources/images/tablets-responsive-design.png';
import Card from '../Card';
import colors from '../../styles/shared/colors';
import { Container } from './styles';

const CardList = () => {
  const cards = [
    {
      id: 'desktop', 
      title: 'Site Responsivo DESKTOP', 
      text: ['Quando pressionado o botão ', <strong>Leia mais...</strong>, ' o restante da informação deverá aparecer em scroll down'], 
      img: desktop,
      color: colors.salmon
    },
    {
      id: 'tablet', 
      title: 'Site Responsivo TABLET', 
      text: ['Quando pressionado o botão ', <strong>Leia mais...</strong>, ' informação deverá aparecer completa em um popup na tela.'], 
      img: tablets,
      color: colors.yellow
    },
    {
      id: 'mobile', 
      title: 'Site Responsivo MOBILE', 
      text: ['Quando pressionado o botão ', <strong>alterar tema</strong>, ' modifique o tema do site para blackfriday a seu gosto.'],
      img: mobile,
      color: colors.purple
    },
  ]
  return (
    <Container>
      {console.log(cards)}
      {cards.map(card => 
        <Card 
          key={card.id} 
          title={card.title} 
          text={card.text} 
          img={card.img}
          color={card.color}
        />
      )}
    </Container>
  );
}
export default CardList;