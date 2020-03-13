import styled from 'styled-components';
import { largeScreen } from '../../styles/shared/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-top: 1%;
  flex-direction: column;
  ${largeScreen} { flex-direction: row }
`;

export const FooterItem = styled.div`
  flex: ${props => props.flex || 1};
  display: flex;
  justify-content: flex-end;
  margin: 1% 0;
  ${largeScreen} { margin: 0; }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: 0 1%;
  cursor: pointer;
`;

