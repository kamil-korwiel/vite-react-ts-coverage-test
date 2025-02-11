// import { describe, it, expect} from 'vitest'
// import { ThemeProvider } from 'styled-components'
// import { lightTheme, darkTheme } from '../src/styles/theme'
// import { render, screen } from '@testing-library/react'
// import { Category } from '../src/components/Category'
// import React from "react"
// // Mock Theme (Ensure this matches your actual theme structure)
// const mockTheme = {
//     ...lightTheme,
// }

// // Helper function to render with theme
// const renderWithTheme = (ui: React.ReactElement) =>
//   render(<ThemeProvider theme={mockTheme}>{ui}</ThemeProvider>)

// describe('Category Component', () => {
//   it('renders the Category component with round prop', () => {
//     renderWithTheme(<Category title="Test Title with round prop" photoUrl="test.jpg" round />)

//     const categoryElement = screen.getByTestId('Test Title with round prop')
//     expect(categoryElement).toBeInTheDocument()
//     expect(categoryElement).toHaveStyle('flex-direction: column')
//   })

//   it('renders the Category component without round prop', () => {
//     renderWithTheme(<Category title="Test Title without round prop" photoUrl="test.jpg" />)

//     const categoryElement = screen.getByTestId('Test Title without round prop')
//     expect(categoryElement).toBeInTheDocument()
//     expect(categoryElement).toHaveStyle('flex-direction: row')
//   })

//   it('renders the image and title correctly', () => {
//     renderWithTheme(<Category title="Test title and image reders" photoUrl="test.jpg" round />)

   
//     const titleElement = screen.getByTestId('Test title and image reders')
//     // console.log(titleElement.innerHTML)
//     const imgElement = titleElement.querySelector('img')

//     expect(titleElement).toBeInTheDocument()
//     expect(imgElement !== null).toBeTruthy()
//     expect(imgElement).toBeInTheDocument()
    
//   })

// //   it('applies hover effect', async () => {
// //     const user = userEvent.setup()
// //     const categoryElement = screen.getByTestId('category-Test Title')

// //     // Simulate hover
// //     await user.hover(categoryElement)

// //     // Check the style after hover
// //     expect(categoryElement).toHaveStyle('opacity: 0.9')
// //   })
// })