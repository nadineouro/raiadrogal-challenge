import styled from 'styled-components';
import colors from '../../styles/shared/colors';
import { smallScreen, mediumScreen, largeScreen } from '../../styles/shared/breakpoints';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: auto visible;
`;

export const Title = styled.div`
  color: ${colors.green};
  font-weight: 100;
  letter-spacing: -0.03em;
  line-height: 1em;
  padding: 5% 10% 2%;
  ${smallScreen} { padding-top: 10%; font-size: 20px; }
  ${mediumScreen} { font-size: 40px; }
  ${largeScreen} { font-size: 50px; }
`;

export const SubTitle = styled.div`
  color: ${colors.gray};
  padding: 3% 15% 0; 
  span { border-radius: 100%; display: inline-block; }
  ${smallScreen} { font-size: 10px; span { width: 5px; height: 5px; } }
  ${mediumScreen} { font-size: 20px; span { width: 10px; height: 10px; } }
  ${largeScreen} { font-size: 30px; span { width: 15px; height: 15px; } }
`;
