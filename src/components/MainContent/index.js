import React from 'react';
import { Container, Title, SubTitle } from './styles';
import colors from '../../styles/shared/colors';
import CardList from '../CardList';


const MainContent = () => {
  const colorList = [
    { name: 'green', color: colors.green },
    { name: 'gray', color: colors.gray },
    { name: 'salmon', color: colors.salmon },
    { name: 'purple', color: colors.purple },
  ];

  return (
    <Container>
      <Title>
        Crie este site <strong>responsivo</strong> com
        <strong> REACT</strong> utilizando <strong>styled-components</strong>
      </Title>
      <SubTitle>
      A fonte utilizada é a Open Sans de 300 a 800. <br />
      exemplo: "Open Sans", Helvetica, sans-serif, arial; <br />
      Já as cores são: <br />
      {
        colorList.map(c => (
          <div key={c.name}>
            <span style={{ background: c.color }} />
            {c.color}, 
          </div>
        ))
      }
      </SubTitle>
      <CardList />
    </Container>
  )
};

export default MainContent;