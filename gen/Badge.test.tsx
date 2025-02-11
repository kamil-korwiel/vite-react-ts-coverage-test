import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { Badge } from "../src/components/Badge";
import { lightTheme } from '../src/styles/theme.ts'

import { describe, it, expect } from 'vitest'
import { ThemeProvider } from 'styled-components'


const renderWithTheme = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>)

describe('Badge Component', () => {
    it('renders correctly with given text', () => {
      renderWithTheme(<Badge text="Test Badge" />)

      expect(screen.getByText('Test Badge')).toBeInTheDocument()
    })

    it('applies the className prop correctly', () => {
        renderWithTheme(<Badge text="Test Badge" className="custom-class"/>)
        const container = screen.getByText('Test Badge').parentElement
        expect(container).toHaveClass('custom-class')
    })

})