import React from 'react'
import { describe, it, expect, vi} from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import { TopBanner } from '../src/components/TopBanner'
import userEvent from '@testing-library/user-event'

describe('TopBanner Component', () => {
  it('renders correctly with title and photoUrl', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <TopBanner title="Test Title" photoUrl="test-photo-url.jpg" />
      </ThemeProvider>
    )
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByTestId("topBanner")).toHaveStyle('background-image: url("test-photo-url.jpg")')
    
  })

  it('renders correctly without photoUrl', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <TopBanner title="Test Title" />
      </ThemeProvider>
    )
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

//   it('calls onBackClick when back button is clicked', () => {
//     const onBackClick = vi.fn()
//     render(
//       <ThemeProvider theme={lightTheme}>
//         <TopBanner title="Test Title" onBackClick={onBackClick} />
//       </ThemeProvider>
//     )
//     // Uncomment the following lines if the back button is implemented
//     // const backButton = screen.getByRole('button')
//     // userEvent.click(backButton)
//     // expect(onBackClick).toHaveBeenCalledTimes(1)
//   })
})