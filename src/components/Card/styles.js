import styled from 'styled-components';
import colors from '../../styles/shared/colors';
import { smallScreen, mediumScreen, largeScreen } from '../../styles/shared/breakpoints';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  margin: 2%;
  background-color:blue;
`;

export const Media = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${props => props.color};
  font-size: 1.5em;
  color: ${props => props.theme.cardText};
  padding: 30px 10px; 
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  background-color: ${props => props.theme.card};
  font-size: 1em;
  color: ${props => props.theme.cardText};
  text-align: left;
  padding: 1%;
  letter-spacing: -0.01em;  
`;

export const ButtonContainer = styled.div`
  background-color: blue;
`;

export const Button = styled.button`
  float: right;
  margin: 18px;
  margin-top: 0;
  background-color: ${props => props.color};
  padding: 10px;
  border: 0;
  color: ${colors.white};
  cursor: pointer;
  ${smallScreen} { font-size: 14px; };  
  ${mediumScreen} { font-size: 16px; };  
  ${largeScreen} { font-size: 18px; };  

  &:hover {
    text-decoration: underline;
  }
`;
