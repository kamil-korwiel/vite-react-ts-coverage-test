import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import { OrderSummary } from '../src/components/ShoppingCart'
import userEvent from '@testing-library/user-event'

describe('OrderSummary', () => {
  const renderWithTheme = (component: React.ReactNode) => {
    return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>)
  }

  const cartItems = [
    { id: 1, name: 'Item 1', price: 10, quantity: 2 },
    { id: 2, name: 'Item 2', price: 20, quantity: 1 },
  ]

  it('should display "Your cart is empty." when there are no items', () => {
    renderWithTheme(<OrderSummary cartItems={[]} />)
    expect(screen.getByText('Your cart is empty.')).toBeInTheDocument()
  })

  it('should display the correct total price for cart items', () => {
    renderWithTheme(<OrderSummary cartItems={cartItems} />)
    expect(screen.getByText('40,00 €')).toBeInTheDocument()
  })

  it('should display all cart items', () => {
    renderWithTheme(<OrderSummary cartItems={cartItems} />)
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })
})
