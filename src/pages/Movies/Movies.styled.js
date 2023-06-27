import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import filmImg from 'images/film1.jpg';

export const MoviesSection = styled.section`
  height: 575px;
  background-image: url(${filmImg});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 30px;
`;

export const FormEL = styled.form`
  display: flex;
`;

export const InputField = styled.input`
  height: 22px;
  width: 300px;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 15px;
`;

export const ButtonEl = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  height: 26px;
  width: 80px;
  border-radius: 5px;
  cursor: pointer;

  & svg {
    height: 18px;
    width: 18px;
  }

  &:hover {
    background-color: #edd068;
  }
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
`;

export const StyledLink = styled(Link)`
  font-weight: 500;
  color: #362d17;
  text-shadow: 1px 1px 1px #fdff70;
  font-size: 20px;
  &:hover {
    color: #cc2b16;
    text-decoration: underline;
  }
`;
