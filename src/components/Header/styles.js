import styled from 'styled-components';
import colors from '../../styles/shared/colors';
import { smallScreen, mediumScreen } from '../../styles/shared/breakpoints';


export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 90px;
  border-bottom: 1px solid ${colors.lightGray};
  justify-content: space-between;
  ${smallScreen} { justify-content: center; border: 0; }
  ${mediumScreen} { justify-content: center; }
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  min-width: 400px;
  ${smallScreen} { border-bottom: 1px solid ${colors.lightGray}; }
`;

export const Item = styled.a`
  color: ${colors.green};
  margin-right: 3%;
  font-weight: 300;
  letter-spacing: -0.1em;
  line-height: 1.2em;
  text-decoration: none;
  text-shadow: 1px 1px 0px #fff;
  &:hover {
    color: ${colors.salmon};
    text-decoration: underline ${colors.salmon}
  }
`;

