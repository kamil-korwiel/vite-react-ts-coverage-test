import styled, { useTheme } from 'styled-components'

import Icons from '../../assets/icons/sprite-map.svg'

const StyledSVG = styled.svg`
  display: block;
`

type IconProps = {
  name: string
  color?: string
  size?: number | string
}

export const Icon = ({ name, color, size = '1.5rem' }: IconProps) => {
  const { color: themeColor } = useTheme()
  return (
    <StyledSVG
      data-testid="icon"
      stroke={color || themeColor.primaryText}
      width={size}
      height={size}
      style={{ minWidth: size }}
      // name={name}
    >
      <use xlinkHref={`${Icons}#${name}`} />
    </StyledSVG>
  )
}
