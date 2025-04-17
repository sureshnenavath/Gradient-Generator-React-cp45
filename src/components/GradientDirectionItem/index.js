import {ListEl, DirectionButton} from './styledComponents'

const GradientDirectionItem = ({
  gradientDirectionsList,
  handleChangeTab,
  isActive,
}) => {
  const {value, displayText} = gradientDirectionsList

  const onHandleChangeTab = () => {
    handleChangeTab(value)
  }

  return (
    <ListEl>
      <DirectionButton onClick={onHandleChangeTab} isActive={isActive}>
        {displayText}
      </DirectionButton>
    </ListEl>
  )
}

export default GradientDirectionItem
