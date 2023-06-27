import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 2px 2px 2px #b0b0b0;
  width: 205px;
  height: 360px;

  & img {
    width: 205px;
  }
`;

export const ImgContainer = styled.div`
  height: 308px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 2px -2px gray;
`;

export const CardInfo = styled.div`
  padding: 5px 10px;
  overflow: auto;

  & b {
    margin-bottom: 5px;
  }
`;
