import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import { HeaderComponent } from '../src/components/Header/Header'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '../src/components/Header'
import { Provider } from 'react-redux'
import { store,rootReducer } from '../src/app-state'
import { configureStore } from '@reduxjs/toolkit'

describe('HeaderComponent', () => {
  
  const mockCartItems = [
    { id: 1, name: 'Item 1', price: 50, quantity: 1 }
  ]

  it('renders the header with only logo', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <HeaderComponent logoOnly={true} />
        </ThemeProvider>
      </BrowserRouter>
    )
    
    expect(screen.getByLabelText(/go to home page/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/food cart/i)).not.toBeInTheDocument()

  })

  it('toggles the cart visibility when cart button is clicked', async () => {
    const toggleCartVisibility = vi.fn()

    render(
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <HeaderComponent toggleCartVisibility={toggleCartVisibility} />
        </ThemeProvider>
      </BrowserRouter>
    )
    const cartButton = screen.getByLabelText(/food cart/i)
    await userEvent.click(cartButton)
    expect(toggleCartVisibility).toHaveBeenCalled()
  })

  it('displays the total price', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <HeaderComponent totalPrice={100} />
        </ThemeProvider>
      </BrowserRouter>
    )
    expect(screen.getByText(/100.00/i)).toBeInTheDocument()
  })

  it('displays the Order Cart and Items in init', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <HeaderComponent cartItems={mockCartItems} isCartVisible={true} />
        </ThemeProvider>
      </BrowserRouter>
    )

    expect(screen.getByText(/Your order/i)).toBeInTheDocument()
    expect(screen.getByText(/Item 1/i)).toBeInTheDocument()
  })

  it('check if checkout and selector is clicked', async () => {
    const goToCheckout = vi.fn()
    const saveItem = vi.fn()

    render(
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <HeaderComponent totalPrice={100} cartItems={mockCartItems} isCartVisible={true} goToCheckout={goToCheckout} saveItem={saveItem}/>
        </ThemeProvider>
      </BrowserRouter>
    )
    const checkoutButton = screen.getByText(/checkout/i)
    await userEvent.click(checkoutButton)
    expect(checkoutButton).not.toBeDisabled()
    expect(goToCheckout).toHaveBeenCalled()

    const optionSelector = screen.getByRole('combobox')
    await userEvent.selectOptions(optionSelector,'2')
    expect(saveItem).toHaveBeenCalled()


  })
})

describe('Header', () => {

    it('renders the header with Redux store', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={lightTheme}>
              <Header />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      )
      expect(screen.getByTestId('header')).toBeInTheDocument()
    })

    it('applies sticky prop correctly', () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={lightTheme}>
              <Header sticky={true} />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      )
      expect(screen.getByTestId('header')).toHaveStyle('position: sticky')
    })

    it('toggles cart visibility when cart button is clicked', async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={lightTheme}>
              <Header />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      )
      const cartButton = screen.getByLabelText(/food cart/i)
      await userEvent.click(cartButton)
      const cart = screen.getByText(/Your order/i)
      expect(cart).toBeVisible()
    })

    it('check if checkout Button be disable if no items', async () => {
      
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={lightTheme}>
              <Header />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      )
      const cartButton = screen.getByLabelText(/food cart/i)
      await userEvent.click(cartButton)
      const checkoutButton = screen.getByText(/checkout/i)
      expect(checkoutButton).toBeDisabled()
    })
})


describe('Header with Cart Items', () => {
  const mockCartItems = [
    { id: 1, name: 'Item 1', price: 50, quantity: 1 },
    { id: 2, name: 'Item 2', price: 50, quantity: 1 },
  ]

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: {
      cart: {
        items: mockCartItems,
        visible: false,
      },
    },
  })

  it('displays the correct total price with mock cart items', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={lightTheme}>
            <Header />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    )
    expect(screen.getByText(/100.00/i)).toBeInTheDocument()
  })

  it('renders cart items correctly', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={lightTheme}>
            <Header />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    )
    const cartButton = screen.getByLabelText(/food cart/i)
    await userEvent.click(cartButton)
    expect(screen.getByText(/Item 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Item 2/i)).toBeInTheDocument()
  })

  it('enables checkout button when there are items in the cart', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={lightTheme}>
            <Header />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    )
    const cartButton = screen.getByLabelText(/food cart/i)
    await userEvent.click(cartButton)
    const checkoutButton = screen.getByText(/checkout/i)
    expect(checkoutButton).not.toBeDisabled()
  })
})
