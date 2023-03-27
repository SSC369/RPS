import {
  ResultContainer,
  ResultsChoicesContainer,
  ResultText,
  PlayAgainButton,
} from './styledComponents'
import {ChoiceImage} from '../ChoiceItem/styledComponents'

const ResultCard = props => {
  const {choiceId, choicesList, onClickPlayAgain, result, opponentId} = props
  const choice = choicesList.find(eachChoice => eachChoice.id === choiceId)

  const choiceImage = choice.imageUrl

  const opponentChoice = choicesList.find(item => item.id === opponentId)
  const opponentImage = opponentChoice.imageUrl

  const choosePlay = () => {
    onClickPlayAgain()
  }

  return (
    <ResultContainer>
      <ResultsChoicesContainer>
        <ChoiceImage src={choiceImage} alt="your choice" />
        <ChoiceImage src={opponentImage} alt="opponent choice" />
      </ResultsChoicesContainer>
      <ResultText>{result}</ResultText>
      <PlayAgainButton onClick={choosePlay}>Play Again</PlayAgainButton>
    </ResultContainer>
  )
}

export default ResultCard
