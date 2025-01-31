import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { Badge } from "../src/components/Badge";
import { lightTheme, darkTheme } from '../src/styles/theme.ts'

import { describe, it, expect } from 'vitest'
import { ThemeProvider } from 'styled-components'

const mockTheme = {
    color: {
      badgeBackground: '#eee',
      badgeText: '#333',
    },
    borderRadius: {
      xs: '4px',
    },
    typography: {
      fontWeight: {
        normal: '400',
        bold: '700',
      },
      fontSize: {
        S: '14px',
      },
    },
  }

const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={mockTheme}>{ui}</ThemeProvider>)

const renderWithLightTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>)

const renderWithDarkTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={darkTheme}>{ui}</ThemeProvider>)

describe('Badge Component', () => {

  it('renders with light theme', () => {
    renderWithLightTheme(<Badge text="Test" className="custom-class" />)
    renderWithLightTheme(<Badge text="Test" />)
  })

  it('renders with dark theme', () => {
    renderWithDarkTheme(<Badge text="Test" className="custom-class" />)
    renderWithDarkTheme(<Badge text="Test" />)
    
  })


  it('renders the badge with text', () => {
    renderWithTheme(<Badge text="New" />)
    // screen.debug()
    const badgeElement = screen.getByText(/new/i) // Case-insensitive match
    expect(badgeElement).toBeInTheDocument()
  })

  it('applies the provided className', () => {
    const { container } = renderWithTheme(<Badge text="Test" className="custom-class" />)
    // screen.debug()
    expect(container.firstChild).toHaveClass('custom-class')
  })

 

 
})