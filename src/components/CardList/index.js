import React, { useState } from 'react';
import desktop from '../../resources/images/desktop-responsive-design.png';
import mobile from '../../resources/images/mobile-responsive-design.png';
import tablets from '../../resources/images/tablets-responsive-design.png';
import Card from '../Card';
import colors from '../../styles/shared/colors';
import { Container } from './styles';
import usePersistedState from '../../utils/usePersistedState';
import main from '../../styles/themes/main';
import blackFriday from '../../styles/themes/blackFriday';
import Popup from '../Popup';

const CardList = () => {
  const [theme, setTheme] = usePersistedState('theme', main);
  const toggleTheme = () => setTheme(theme.title === 'main' ? blackFriday : main)

  const [isPopupOpened, setPopupStatus] = useState(false)
  const [isCardExpanded, setCardExpandad] = useState(false)

  const cards = [
    {
      key: 'desktop', 
      title: 'Site Responsivo DESKTOP', 
      text: ['Quando pressionado o botão ', <strong>Leia mais...</strong>, ' o restante da informação deverá aparecer em scroll down.'], 
      img: desktop,
      color: colors.salmon,
      button: 'Leia mais...',
      onClickButton: () => setCardExpandad(!isCardExpanded),
      expanded: isCardExpanded
    },
    {
      key: 'tablet', 
      title: 'Site Responsivo TABLET', 
      text: ['Quando pressionado o botão ', <strong>Leia mais...</strong>, ' a informação deverá aparecer completa em um popup na tela.'], 
      img: tablets,
      color: colors.yellow,
      button: 'Leia mais...',
      onClickButton: () => setPopupStatus(!isPopupOpened)
    },
    {
      key: 'mobile', 
      title: 'Site Responsivo MOBILE', 
      text: ['Quando pressionado o botão ', <strong>alterar tema</strong>, ' modifique o tema do site para blackfriday a seu gosto.'],
      img: mobile,
      color: colors.purple,
      button: 'Alterar tema',
      onClickButton: toggleTheme
    },
  ]
  return (
    <>
      <Popup 
        open={isPopupOpened} 
        onClose={() => setPopupStatus(false)} 
        text={cards[1].text}
      />
      <Container>
        {cards.map(card => 
          <Card 
            key={card.key} 
            title={card.title} 
            text={card.text} 
            img={card.img}
            color={card.color}
            button={card.button}
            onClickButton={card.onClickButton}
            expanded={card.expanded}
          />
        )}
      </Container>
    </>
  );
}
export default CardList;