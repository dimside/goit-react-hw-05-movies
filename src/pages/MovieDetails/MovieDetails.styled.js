import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieDetailsSection = styled.div`
  padding: 15px;
`;

export const BackButton = styled(Link)`
  border: 2px solid black;
  border-radius: 5px;
  font-size: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  background-color: #ffdb8f;
  color: #820000;
  margin-bottom: 10px;

  &:hover {
    box-shadow: 1px 2px 2px 2px gray;
  }
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
  box-shadow: 0 4px 2px -2px gray;

  & div {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }
`;

export const ImgContainer = styled.div`
  margin-right: 20px;

  & img {
    width: 200px;
  }
`;

export const AdditionalInfo = styled.div`
  padding-left: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0 4px 2px -2px gray;

  & h3 {
    margin-bottom: 10px;
  }

  & ul {
    padding-left: 20px;
    list-style: circle;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const StyledLink = styled(Link)`
  color: #573218;
  font-size: 18px;

  &:hover {
    color: #d41b11;
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;
