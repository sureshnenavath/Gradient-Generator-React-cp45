import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-image: ${props =>
    `linear-gradient(to ${props.activeDirectionTab}, ${props.firstGradient}, ${props.secondGradient})`};
  transition: background-image 0.3s ease-in-out;
`

export const UlElement = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
`

export const ListEl = styled.li`
  margin: 0 10px;
`

export const DirectionButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => (props.isActive ? '#0b69ff' : '#ffffff')};
  color: ${props => (props.isActive ? '#ffffff' : '#000000')};
  border: 2px solid #0b69ff;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  outline: none;

  &:hover {
    background-color: #0b69ff;
    color: #ffffff;
  }
`
