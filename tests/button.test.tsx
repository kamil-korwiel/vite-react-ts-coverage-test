import { render, screen, fireEvent  } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { Button } from '../src/components/Button'
import React from "react";
import "@testing-library/jest-dom/vitest";

// Mock Theme (Ensure this matches your actual theme structure)
const mockTheme: any = {
  color: {
    primaryText: '#000',
    buttonText: '#fff',
    buttonClear: 'transparent',
    buttonClearHover: '#ddd',
    buttonPrimary: '#007BFF',
    buttonPrimaryHover: '#0056b3',
  },
  borderRadius: {
    xs: '4px',
    xl: '50px',
  },
  boxShadow: {
    outerBorder: '0 0 0 3px rgba(0, 123, 255, 0.5)',
  },
}

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={mockTheme}>{ui}</ThemeProvider>)

describe('Button Component', () => {
  it('renders the button with text', () => {
    renderWithTheme(<Button>Click Me</Button>)

    const buttonElement = screen.getByText(/click me/i)
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders an icon when provided', () => {
    renderWithTheme(<Button icon="star">Be a Star</Button>)

    const iconElement = screen.getByTestId("icon")
    expect(iconElement).toBeInTheDocument()
  })

  it('applies the correct class when `round` is true', () => {
    const { container } = renderWithTheme(<Button round>Round Button</Button>)

    expect(container.firstChild).toHaveStyle('border-radius: 50px')
  })

  it('applies the `disabled` attribute when disabled', () => {
    renderWithTheme(<Button disabled>Disabled</Button>)

    const buttonElement = screen.getByText(/disabled/i)
    expect(buttonElement).toBeDisabled()
  })

  it('calls the onClick function when clicked', () => {
    const handleClick = vi.fn() // Mock function

    renderWithTheme(<Button data-testid="uno" onClick={handleClick}>Click Me</Button>)

    const buttonElement = screen.getByTestId("uno")

    fireEvent.click(buttonElement) // Simulate click

    expect(handleClick).toHaveBeenCalledTimes(1) // Check if function was called
  })

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn()
  
    renderWithTheme(<Button data-testid="dos" onClick={handleClick} disabled>Click Me</Button>)
  
    const buttonElement = screen.getByTestId("dos")
  
    fireEvent.click(buttonElement)
  
    expect(handleClick).not.toHaveBeenCalled() 
    expect(buttonElement).toBeDisabled() 
  })

})