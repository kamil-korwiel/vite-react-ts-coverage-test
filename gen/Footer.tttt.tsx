import React from "react";
import { render, screen} from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { Footer } from '../src/components/Footer/Footer.tsx'
import { lightTheme } from '../src/styles/theme.ts'


describe('Footer Component', () => {
  
    const renderFooter = () =>
    render(
      <ThemeProvider theme={lightTheme}>
        <Footer />
      </ThemeProvider>
    )

  it('should render the Logo component', () => {
    renderFooter()
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
  })

//   it('should render FooterCard components with correct titles', () => {
//     renderFooter()
//     expect(screen.getByText('Discover us')).toBeInTheDocument()
//     expect(screen.getByText('Our social media')).toBeInTheDocument()
//     expect(screen.getByText('Check our apps')).toBeInTheDocument()
//   })

//   it('should render navigation links correctly', () => {
//     renderFooter()
//     expect(screen.getByText('Home')).toHaveAttribute('href', '/')
//     expect(screen.getByText('Categories')).toHaveAttribute('href', '/categories')
//     expect(screen.getByText('About')).toHaveAttribute('href', '/about')
//     expect(screen.getByText('Login')).toHaveAttribute('href', '/login')
//   })

//   it('should render social media links correctly', () => {
//     renderFooter()
//     expect(screen.getByText('Facebook')).toHaveAttribute('href', 'https://facebook.com')
//     expect(screen.getByText('Instagram')).toHaveAttribute('href', 'https://instagram.com')
//     expect(screen.getByText('Twitter')).toHaveAttribute('href', 'https://twitter.com')
//   })

//   it('should render app store banners correctly', () => {
//     renderFooter()
//     expect(screen.getByAltText('app store link')).toBeInTheDocument()
//     expect(screen.getByAltText('google play link')).toBeInTheDocument()
//   })
})