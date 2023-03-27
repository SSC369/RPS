import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  GameContainer,
  GameScoreContainer,
  GameChoices,
  ResponsiveContainer,
  ScoreText,
  Score,
  ScoreContainer,
  ChoicesContainer,
  RulesButton,
  ModalContainer,
  RulesImage,
  CloseButton,
} from './styledComponents'

import ChoiceItem from '../ChoiceItem'
import ResultCard from '../ResultCard'

class Game extends Component {
  state = {
    score: 0,
    gameRunning: true,
    result: '',
    opponentId: '',
    choiceId: '',
  }

  componentDidMount() {
    this.getOpponentId()
  }

  getOpponentId = () => {
    const {choicesList} = this.props
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const randomChoiceId = choicesList[randomIndex].id
    console.log(randomIndex)
    console.log(randomChoiceId)
    this.setState({opponentId: randomChoiceId})
  }

  onClickChoice = id => {
    const {opponentId} = this.state
    this.setState({choiceId: id})
    console.log(id)
    if (id === opponentId) {
      this.setState({result: 'IT IS DRAW', gameRunning: false})
    } else {
      if (id === 'ROCK') {
        if (opponentId === 'SCISSORS') {
          this.setState(prevState => ({
            score: prevState.score + 1,
            gameRunning: false,
            result: 'YOU WON',
          }))
        } else {
          this.setState(prevState => ({
            score: prevState.score - 1,
            result: 'YOU LOSE',
            gameRunning: false,
          }))
        }
      }

      if (id === 'PAPER') {
        if (opponentId === 'ROCK') {
          this.setState(prevState => ({
            score: prevState.score + 1,
            gameRunning: false,
            result: 'YOU WON',
          }))
        } else {
          this.setState(prevState => ({
            score: prevState.score - 1,
            result: 'YOU LOSE',
            gameRunning: false,
          }))
        }
      }

      if (id === 'SCISSORS') {
        if (opponentId === 'PAPER') {
          this.setState(prevState => ({
            score: prevState.score + 1,
            gameRunning: false,
            result: 'YOU WON',
          }))
        } else {
          this.setState(prevState => ({
            score: prevState.score - 1,
            result: 'YOU LOSE',
            gameRunning: false,
          }))
        }
      }
    }
  }

  onClickPlayAgain = () => {
    this.setState({gameRunning: true}, this.getOpponentId)
  }

  render() {
    const {score, gameRunning, choiceId, opponentId, result} = this.state
    const {choicesList} = this.props
    return (
      <GameContainer>
        <GameScoreContainer>
          <ResponsiveContainer>
            <GameChoices>Rock Paper Scissors</GameChoices>
          </ResponsiveContainer>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <Score>{score}</Score>
          </ScoreContainer>
        </GameScoreContainer>

        {gameRunning ? (
          <ChoicesContainer>
            {choicesList.map(eachChoice => (
              <ChoiceItem
                key={eachChoice.id}
                choice={eachChoice}
                onClickChoice={this.onClickChoice}
              />
            ))}
          </ChoicesContainer>
        ) : (
          <ResultCard
            choicesList={choicesList}
            choiceId={choiceId}
            opponentId={opponentId}
            onClickPlayAgain={this.onClickPlayAgain}
            result={result}
          />
        )}
        <Popup modal trigger={<RulesButton>Rules</RulesButton>}>
          {close => (
            <ModalContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine />
              </CloseButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </ModalContainer>
          )}
        </Popup>
      </GameContainer>
    )
  }
}

export default Game

/* https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png */
