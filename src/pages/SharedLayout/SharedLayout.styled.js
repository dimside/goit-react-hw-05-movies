import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderEl = styled.header`
  display: flex;
  align-items: center;
  height: 60px;
  box-shadow: 0 4px 2px -2px gray;
  background: rgba(245, 236, 170, 0.45);
  padding-left: 30px;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 50px;
  font-size: 28px;
  font-weight: 700;
`;

export const StyledLink = styled(NavLink)`
  color: #820000;
  &.active {
    color: orange;
    text-shadow: 4px 4px 5px rgba(192, 128, 206, 0.51);
  }
`;
