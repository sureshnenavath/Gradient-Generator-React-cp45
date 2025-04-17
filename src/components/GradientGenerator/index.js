import {useState} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {UlElement, MainDiv} from './styledComponents.js'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

const GradientGenerator = () => {
  const [firstColorInput, setFirstColorInput] = useState('#8ae323')
  const [secondColorInput, setSecondColorInput] = useState('#014f7b')
  const [activeDirectionTabAfter, setActiveDirectionTabAfter] = useState(
    gradientDirectionsList[0].value,
  )

  const [firstGradient, setFirstGradient] = useState('#8ae323')
  const [secondGradient, setSecondGradient] = useState('#014f7b')
  const [activeDirectionTab, setActiveDirectionTab] = useState(
    gradientDirectionsList[0].value,
  )

  const handleChangeTab = value => {
    setActiveDirectionTabAfter(value)
  }

  const handleFirstColorChange = e => {
    setFirstColorInput(e.target.value)
  }

  const handleSecondColorChange = e => {
    setSecondColorInput(e.target.value)
  }

  const handleGenerateButton = () => {
    setFirstGradient(firstColorInput)
    setSecondGradient(secondColorInput)
    setActiveDirectionTab(activeDirectionTabAfter)
  }

  return (
    <MainDiv
      firstGradient={firstGradient}
      secondGradient={secondGradient}
      activeDirectionTab={activeDirectionTab}
    >
      <h1>Generate a CSS color Gradient</h1>
      <p>Choose Direction</p>
      <UlElement>
        {gradientDirectionsList.map(eachItem => (
          <GradientDirectionItem
            key={eachItem.directionId}
            gradientDirectionsList={eachItem}
            handleChangeTab={handleChangeTab}
            isActive={activeDirectionTabAfter === eachItem.value}
          />
        ))}
      </UlElement>
      <div>
        <input
          type="color"
          value={firstColorInput}
          onChange={handleFirstColorChange}
        />
        <input
          type="color"
          value={secondColorInput}
          onChange={handleSecondColorChange}
        />
      </div>
      <button onClick={handleGenerateButton}>Generate</button>
    </MainDiv>
  )
}

export default GradientGenerator
