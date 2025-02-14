
import React from 'react'
import { describe, it, expect, vi} from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { IconButton } from '../src/components/IconButton'


describe('IconButton', () => {
  const renderWithTheme = (component: React.ReactElement) => {
    return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>)
  }

  it('renders correctly', () => {
    renderWithTheme(<IconButton name="test-icon" />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calls onClick handler when clicked', async() => {
    const handleClick = vi.fn()
    renderWithTheme(<IconButton name="test-icon" onClick={handleClick} />)
    const button = screen.getByRole('button')
    await userEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})