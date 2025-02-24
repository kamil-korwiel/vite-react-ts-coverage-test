import React from 'react'
import { describe, it, expect, vi} from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import { PageSection } from '../src/components/PageSection'
import userEvent from '@testing-library/user-event'
 
describe('PageSection', () => {
  it('renders the title and children', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <PageSection title="Test Title">
          <div>Child Content</div>
        </PageSection>
      </ThemeProvider>
    )
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Child Content')).toBeInTheDocument()
  })

  it('renders the top button when label is provided', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <PageSection title="Test Title" topButtonLabel="Click Me">
          <div>Child Content</div>
        </PageSection>
      </ThemeProvider>
    )
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('calls onTopButtonClick when top button is clicked', async () => {
    const handleClick = vi.fn()
    render(
      <ThemeProvider theme={lightTheme}>
        <PageSection title="Test Title" topButtonLabel="Click Me" onTopButtonClick={handleClick}>
          <div>Child Content</div>
        </PageSection>
      </ThemeProvider>
    )
    await userEvent.click(screen.getByText('Click Me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})