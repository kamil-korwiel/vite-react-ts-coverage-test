import React from 'react'
import { describe, it, expect, vi} from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import { ShoppingCartMenu } from '../src/components/ShoppingCartMenu'
import userEvent from '@testing-library/user-event'

describe('ShoppingCartMenu', () => {
  const mockCartItems = [
    { id: 1, name: 'Item 1', description: 'Description 1', price: 10, quantity: 1 },
    { id: 2, name: 'Item 2', description: 'Description 2', price: 20, quantity: 2 },
  ]

  const renderComponent = (props = {}) => {
    return render(
      <ThemeProvider theme={lightTheme}>
        <ShoppingCartMenu
          isOpen={true}
          onClose={vi.fn()}
          cartItems={mockCartItems}
          totalPrice={30}
          onItemChange={vi.fn()}
          onGoToCheckoutClick={vi.fn()}
          {...props}
        />
      </ThemeProvider>
    )
  }

  it('renders cart items correctly', () => {
    renderComponent()
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('calls onItemChange when item quantity is changed', async () => {
    const onItemChange = vi.fn()
    renderComponent({ onItemChange })
    const select = screen.getAllByRole('combobox')[0]
    await userEvent.selectOptions(select, '2')
    expect(onItemChange).toHaveBeenCalledWith({ ...mockCartItems[0], quantity: 2 })
  })

  it('calls onGoToCheckoutClick when checkout button is clicked', async () => {
    const onGoToCheckoutClick = vi.fn()
    renderComponent({ onGoToCheckoutClick })
    const button = screen.getByRole('button', { name: /checkout/i })
    await userEvent.click(button)
    expect(onGoToCheckoutClick).toHaveBeenCalled()
  })

  it('disables checkout button when totalPrice is 0', () => {
    renderComponent({ totalPrice: 0 })
    const button = screen.getByRole('button', { name: /checkout/i })
    expect(button).toBeDisabled()
  })
})