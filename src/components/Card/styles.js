import styled from 'styled-components';
import colors from '../../styles/shared/colors';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  min-width: 300px;
  margin: 0 2%;
`;

export const Media = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: ${props => props.color};
  font-size: 1.5em;
  color: ${colors.white};
  padding: 30px 10px; 
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const Content = styled.div`
  flex: 1;
  background-color: ${colors.white};
  font-size: 1em;
  color: ${colors.black};
  button {
    background-color: ${colors.green}
  }
`;
