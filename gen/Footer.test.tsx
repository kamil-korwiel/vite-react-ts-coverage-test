import React from 'react'
import { describe, it, expect, vi} from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import { Footer } from '../src/components/Footer'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

describe('Footer', () => {
  it('renders the Footer component', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={lightTheme}>
          <Footer />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(screen.getByText('Discover us')).toBeInTheDocument()
    expect(screen.getByText('Our social media')).toBeInTheDocument()
    expect(screen.getByText('Check our apps')).toBeInTheDocument()
    expect(screen.getByAltText('app store link')).toBeInTheDocument()
    expect(screen.getByAltText('google play link')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={lightTheme}>
          <Footer />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={lightTheme}>
          <Footer />
        </ThemeProvider>
      </MemoryRouter>
    )
    expect(screen.getByText('Facebook')).toBeInTheDocument()
    expect(screen.getByText('Instagram')).toBeInTheDocument()
    expect(screen.getByText('Twitter')).toBeInTheDocument()
  })
})

// ? Do I need for this test to add a href component 

/*
  const navigationLinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Categories',
      href: '/categories',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Login',
      href: '/login',
    },
  ]

  const socialMediaLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      external: true,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      external: true,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      external: true,
    },
  ]
*/