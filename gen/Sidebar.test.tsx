import React from 'react'
import { describe, it, expect, vi} from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import { Sidebar } from '../src/components/Sidebar/Sidebar'
import userEvent from '@testing-library/user-event'

const renderSidebar = (isOpen: boolean, onClose = vi.fn()) => {
  return render(
    <ThemeProvider theme={lightTheme}>
      <Sidebar isOpen={isOpen} title="Test Sidebar" onClose={onClose}>
        <div>Sidebar Content</div>
      </Sidebar>
    </ThemeProvider>
  )
}

describe('Sidebar', () => {
  it('renders correctly when open', () => {
    renderSidebar(true)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByText('Test Sidebar')).toBeInTheDocument()
    expect(screen.getByText('Sidebar Content')).toBeInTheDocument()
  })

  it('does not render when closed', () => {
    renderSidebar(false)
    expect(screen.queryByTestId('sidebar')).not.toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const onClose = vi.fn()
    renderSidebar(true, onClose)
    const closeButton = screen.getByTestId('sidebar-close-btn')
    await userEvent.click(closeButton)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when backdrop is clicked', async () => {
    const onClose = vi.fn()
    renderSidebar(true, onClose)
    const backdrop = screen.getByTestId('Sidebar-backdrop')
    await userEvent.click(backdrop)
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})