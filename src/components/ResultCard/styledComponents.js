import styled from 'styled-components'

export const ResultsChoicesContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 200px;
  margin-top: 20px;
  @media (min-width: 768px) {
    width: 500px;
    height: 340px;
  }
`
export const ResultText = styled.p`
  color: white;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
export const PlayAgainButton = styled.button`
  background-color: white;
  font-family: bree serif;
  color: #223a5f;
  border-width: 0;
  border-radius: 10px;
  font-weight: 600;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 14px;
  font-size: 12px;
  cursor: pointer;
  outline: none;
  @media (min-width: 768px) {
    font-size: 16px;

    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 14px;
  }
`
