import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import { Icon } from '../src/components/Icon'
import userEvent from '@testing-library/user-event'

describe('Icon Component', () => {
  it('should render correctly with given name', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Icon name="cross" />
      </ThemeProvider>
    )

    const icon = screen.getByTestId('icon')
    expect(icon).toBeInTheDocument()
    expect(icon.querySelector('use')).toHaveAttribute('xlink:href', expect.stringContaining('#cross'))
  })

  it('should apply the correct size and color', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Icon name="cross" size="2rem" color="red" />
      </ThemeProvider>
    )
    screen.debug()
    const icon = screen.getByTestId('icon')
    expect(icon).toHaveAttribute('width', '2rem')
    expect(icon).toHaveAttribute('height', '2rem')
    expect(icon).toHaveAttribute('stroke', 'red')
  })
})