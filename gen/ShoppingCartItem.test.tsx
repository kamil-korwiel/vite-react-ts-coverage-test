import React from 'react'
import { describe, it, expect, vi} from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import { ShoppingCartItem } from '../src/components/ShoppingCart'
import { CartItem } from '../src/app-state/cart'

describe('ShoppingCartItem Component', () => {
    const mockCartItem: CartItem = {
      id: 1,
      name: 'Test Item',
      price: 10,
      quantity: 2,
      imageUrl: 'http://example.com/image.jpg',
      description: 'Test Description'
    }
  
    const renderWithTheme = (component: React.ReactNode) => {
      return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>)
    }
  
    it('renders with correct details', () => {
      renderWithTheme(<ShoppingCartItem item={mockCartItem} />)
  
      expect(screen.getByText('2')).toBeInTheDocument()
      expect(screen.getByText('Test Item')).toBeInTheDocument()
      expect(screen.getByText('20,00 €')).toBeInTheDocument()
    })
  
    it('renders with zero quantity', () => {
      const zeroQuantityItem: CartItem = { ...mockCartItem, quantity: 0 }
      renderWithTheme(<ShoppingCartItem item={zeroQuantityItem} />)
  
      expect(screen.getByText('0')).toBeInTheDocument()
      expect(screen.getByText('Test Item')).toBeInTheDocument()
      expect(screen.getByText('0,00 €')).toBeInTheDocument()
    })
  
    it('renders with negative price', () => {
      const negativePriceItem: CartItem = { ...mockCartItem, price: -10 }
      renderWithTheme(<ShoppingCartItem item={negativePriceItem} />)
  
      expect(screen.getByText('2')).toBeInTheDocument()
      expect(screen.getByText('Test Item')).toBeInTheDocument()
      expect(screen.getByText('-20,00 €')).toBeInTheDocument()
    })
  
    it('renders without optional fields', () => {
      const optionalFieldsItem: CartItem = { ...mockCartItem, imageUrl: undefined, description: undefined }
      renderWithTheme(<ShoppingCartItem item={optionalFieldsItem} />)
  
      expect(screen.getByText('2')).toBeInTheDocument()
      expect(screen.getByText('Test Item')).toBeInTheDocument()
      expect(screen.getByText('20,00 €')).toBeInTheDocument()
    })
  })