import { describe, it, expect, vi} from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme} from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import { Button } from '../src/components/Button/index.tsx'
import React from 'react'
import userEvent from '@testing-library/user-event'

// Mock Theme (Ensure this matches your actual theme structure)
const mockTheme = {
  ...lightTheme,
}

// Helper function to render with theme

describe('Button Component', () => {

  const renderWithTheme = (ui: React.ReactElement) =>
    render(<ThemeProvider theme={mockTheme}>{ui}</ThemeProvider>)
  
  it('renders StyledButton with default props', () => {
    renderWithTheme(<Button>Default Button</Button>)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).not.toHaveAttribute('disabled')
  })

  it('renders StyledButton with icon prop', () => {
    renderWithTheme(<Button icon="check">Button with Icon</Button>)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement.querySelector('svg')).toBeInTheDocument()
  })

  it('renders StyledButton with disabled prop', () => {
    renderWithTheme(<Button disabled>Disabled Button</Button>)

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeDisabled()
  })
 
  it('calls the onClick function when clicked', async () => {
    const handleClick = vi.fn()
    renderWithTheme(<Button data-testid="tres" onClick={handleClick}>Click Me</Button>)

    const buttonElement = screen.getByTestId("tres")

    const user = userEvent.setup()
    await user.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })  
})