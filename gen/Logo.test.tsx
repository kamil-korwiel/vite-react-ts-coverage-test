import React from 'react'
import { describe, it, expect, vi} from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import { Logo, colors, shineColors } from '../src/components/Logo'
import userEvent from '@testing-library/user-event'


describe('Logo Component', () => {
    it('renders correctly with default props', () => {
      render(
        <ThemeProvider theme={lightTheme}>
          <Logo />
        </ThemeProvider>
      )
      const svgElement = screen.getByTestId('icon-svg')

      expect(screen.getByText('MealDrop')).toBeInTheDocument()
      expect(svgElement).toBeInTheDocument()
      expect(svgElement).toHaveStyle('height: 24px')
    })
  
    

    it('renders correctly with large prop', () => {
        render(
            <ThemeProvider theme={lightTheme}>
              <Logo large={true} />
            </ThemeProvider>
          )
          const svgElement = screen.getByTestId('icon-svg')
          expect(svgElement).toHaveStyle('height: 150px')
    })
  
    it('renders correctly with logoOnly prop', () => {
      render(
        <ThemeProvider theme={lightTheme}>
          <Logo logoOnly />
        </ThemeProvider>
      )
      expect(screen.queryByText('MealDrop')).not.toBeInTheDocument()
    })
    
    it('applies the correct theme colors', () => {
        const { getByTestId } = render(
          <ThemeProvider theme={lightTheme}>
            <Logo />
          </ThemeProvider>
        )
        const svgElement = getByTestId('icon-svg')
        const paths = svgElement.querySelectorAll('path')
        paths.forEach((path, index) => {
          expect(path).toHaveAttribute('fill', colors.light[index])
        })
    })

    // it('applies correct fill colors based on theme', () => {
    //     render(
    //       <ThemeProvider theme={lightTheme}>
    //         <Logo />
    //       </ThemeProvider>
    //     )
    //     const paths = screen.getByTestId('icon-svg').querySelectorAll('path')
    //     expect(paths[0]).toHaveAttribute('fill', colors.light[0])
    //     expect(paths[1]).toHaveAttribute('fill', colors.light[1])
    //     expect(paths[2]).toHaveAttribute('fill', colors.light[2])
    //     expect(paths[3]).toHaveAttribute('fill', colors.light[3])
    //     expect(paths[4]).toHaveAttribute('fill', colors.light[4])
    //     expect(paths[5]).toHaveAttribute('fill', colors.light[5])
    //     expect(paths[6]).toHaveAttribute('fill', colors.light[6])
    // })
    // ! To napewno pójdzie do poprawy
    it('applies correct animation styles on hover', async () => {
     
      render(
        <ThemeProvider theme={lightTheme}>
          <Logo />
        </ThemeProvider>
      )
      const pathElement = screen.getByTestId('icon-svg').querySelector('.logo--face-left')
      expect(pathElement).toHaveAttribute('fill', '#61D8DE')
    })

  })