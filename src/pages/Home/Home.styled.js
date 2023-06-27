import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import cinemaImg from 'images/cinema.png';

export const HomeSection = styled.section`
  height: 575px;
  background-image: url(${cinemaImg});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const HomeTitle = styled.h2`
  text-align: center;
  font-family: Robto;
  font-size: 40px;
  color: #facd6b;
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  padding-left: 20px;
`;

export const StyledLink = styled(Link)`
  color: #facd6b;
  text-shadow: 1px 1px 1px #312510;
  font-size: 20px;
  &:hover {
    color: #cf3129;
    text-decoration: underline;
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;
