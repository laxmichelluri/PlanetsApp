import styled from 'styled-components/macro'

export const PlanetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 250px;
  width: 250px;
  @media screen and (min-width: 768px) {
    height: 292px;
    width: 405px;
  }
`

export const Name = styled.h1`
  color: #f8fafc;
  font-size: 20px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-top: 40px;
  }
`

export const Description = styled.p`
  text-align: center;
  color: #f1f5f9;
  font-size: 16px;
  font-family: 'Roboto';

  max-width: 800px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 40px;
  }
`
