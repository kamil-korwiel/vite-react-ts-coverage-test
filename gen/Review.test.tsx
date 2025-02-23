import React from 'react'
import { describe, it, expect, vi} from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import { Review } from '../src/components/Review'
import userEvent from '@testing-library/user-event'

describe('Review Component', () => {
    const renderComponent = (rating?: number) => {
      return render(
        <ThemeProvider theme={lightTheme}>
          <Review rating={rating} />
        </ThemeProvider>
      )
    }
  
    it('should display "No reviews yet" when no rating is provided', () => {
      renderComponent()
      expect(screen.getByText(/No reviews yet/i)).toBeInTheDocument()
    })
  
    it('should display "Very poor" when rating is less than 2', () => {
      renderComponent(1)
      expect(screen.getByText(/★ 1.0 Very poor/i)).toBeInTheDocument()
    })
  
    it('should display "Adequate" when rating is between 2 and 4', () => {
      renderComponent(3)
      expect(screen.getByText(/★ 3.0 Adequate/i)).toBeInTheDocument()
    })
  
    it('should display "Very good" when rating is between 4 and 5', () => {
      renderComponent(4.5)
      expect(screen.getByText(/★ 4.5 Very good/i)).toBeInTheDocument()
    })
  
    it('should display "Excellent" when rating is 5 or more', () => {
      renderComponent(5)
      expect(screen.getByText(/★ 5.0 Excellent/i)).toBeInTheDocument()
    })
  })