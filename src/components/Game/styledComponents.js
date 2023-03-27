import styled from 'styled-components'
import {PlayAgainButton} from '../ResultCard/styledComponents'

export const GameContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const GameScoreContainer = styled.div`
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  max-width: 500px;
  min-width: 200px;
  padding: 10px;
  padding-left: 20px;
  margin-bottom: 30px;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ScoreContainer = styled(ResponsiveContainer)`
  background-color: white;
  width: 80px;
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 100px;
  }
`

export const GameChoices = styled.h1`
  color: #ffffff;
  font-family: Bree serif;
  font-size: 12px;
  font-weight: 400;
  width: 100px;
  margin: 4px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`

export const ScoreText = styled.p`
  color: #223a5f;
  font-family: bree serif;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
export const Score = styled.p`
  font-size: 24px;
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`
export const ChoicesContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 300px;
  height: 200px;
  @media (min-width: 768px) {
    width: 500px;
    height: 340px;
  }
`
export const RulesButton = styled(PlayAgainButton)`
  border-radius: 6px;
  align-self: flex-end;
  margin-right: 20px;
  margin-bottom: 10px;
`

export const ModalContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
`
export const RulesImage = styled.img`
  width: 100%;
  align-self: center;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border-width: 0;
  align-self: flex-end;
  margin-bottom: 10px;
  text-align: right;
`
