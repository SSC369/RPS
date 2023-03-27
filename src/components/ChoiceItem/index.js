import {ChoiceButton, ChoiceImage} from './styledComponents'

const ChoiceItem = props => {
  const {choice, onClickChoice} = props
  const {imageUrl, id} = choice
  const ChooseChoice = () => {
    onClickChoice(id)
  }
  let testValue = null
  if (id === 'ROCK') {
    testValue = 'rockButton'
  } else if (id === 'PAPER') {
    testValue = 'paperButton'
  } else {
    testValue = 'scissorsButton'
  }
  return (
    <li>
      <ChoiceButton data-testid={testValue} onClick={ChooseChoice}>
        <ChoiceImage alt={id} src={imageUrl} />
      </ChoiceButton>
    </li>
  )
}

export default ChoiceItem
