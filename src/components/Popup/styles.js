import styled from 'styled-components';
import colors from '../../styles/shared/colors';
import { smallScreen, mediumScreen, largeScreen } from '../../styles/shared/breakpoints';

export const Container = styled.div`
  display: ${props => props.open ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  
`;

export const PopupContainer = styled.div`
  position:fixed;
  background: ${props => props.theme.card};
  width: 300px;
  height: 200px;
  top:50%;
  left:50%;
  padding: 2%;
  padding-bottom: 2%;
  transform: translate(-50%,-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


export const PopupContent = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  color: ${props => props.theme.text};
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${colors.yellow};
  padding: 5%;
  border: 0;
  color: ${colors.white};
  cursor: pointer;
  ${smallScreen} { font-size: 14px; margin-top: 5px; };  
  ${mediumScreen} { font-size: 16px; margin-top: 10px; };  
  ${largeScreen} { font-size: 18px; margin-top: 20px; };  
`;