import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

export interface SpacerProps {
  size?: 'sm' | 'md' | 'lg'
}

const Spacer: React.FC<SpacerProps> = ({ size = 'md' }) => {
  const { spacing } = useContext(ThemeContext)
  
  let s: number
  switch (size) {
    case 'lg':
      s = spacing[7]
      break
    case 'sm':
      s = spacing[2]
      break
    case 'md':
    default:
      s = 24
  }
  
  return (
    <StyledSpacer size={s} />
  )
}

interface StyledSpacerProps {
  size: number,
}

const StyledSpacer = styled.div<StyledSpacerProps>`
  height: ${props => props.size}px;
  min-height: ${props => props.size}px;
  min-width: ${props => props.size}px;
  width: ${props => props.size}px;
`

export default Spacer