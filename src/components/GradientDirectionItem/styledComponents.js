// Style your elements here
import styled from 'styled-components'
export const ListEl = styled.li`
    list-style: none;
    padding: 10px
`
export const DirectionButton = styled.button`
    background-color: white;
    border: none;
    border-radius: 10px;
    opacity: ${props => (props.isActive ? '1' : '0.5')};
    cursor: pointer;
`
