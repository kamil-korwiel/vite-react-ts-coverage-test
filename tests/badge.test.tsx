import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { Badge } from "../src/components/Badge";
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

describe('Badge Component', () => {
  it('renders the badge with text', () => {
    renderWithTheme(<Badge text="New" />)

    const badgeElement = screen.getByText(/new/i) // Case-insensitive match
    expect(badgeElement).toBeInTheDocument()
  })

  it('applies the provided className', () => {
    const { container } = renderWithTheme(<Badge text="Test" className="custom-class" />)

    expect(container.firstChild).toHaveClass('custom-class')
  })
})