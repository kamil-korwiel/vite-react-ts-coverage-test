import React from 'react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen, waitFor } from '@testing-library/react'
import { Modal } from '../src/components/Modal'
import userEvent from '@testing-library/user-event'

// Mock functions
const onClose = vi.fn()

describe('Modal Component', () => {
  beforeEach(() => {
    onClose.mockClear()
    const modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal')
    document.body.appendChild(modalRoot)
  })

  afterEach(() => {
    const modalRoot = document.getElementById('modal')
    if (modalRoot) {
      document.body.removeChild(modalRoot)
    }
  })

  it('should render the modal when isOpen is true', async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Modal isOpen={true} onClose={onClose}>
          <div>Modal Content</div>
        </Modal>
      </ThemeProvider>
    )

    await waitFor(() => expect(screen.getByTestId('modal')).toBeInTheDocument())
    expect(screen.getByText('Modal Content')).toBeInTheDocument()
  })

  it('should not render the modal when isOpen is false', async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Modal isOpen={false} onClose={onClose}>
          <div>Modal Content</div>
        </Modal>
      </ThemeProvider>
    )

    await waitFor(() => expect(screen.queryByTestId('modal')).not.toBeInTheDocument())
  })

  it('should call onClose when close button is clicked', async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Modal isOpen={true} onClose={onClose}>
          <div>Modal Content</div>
        </Modal>
      </ThemeProvider>
    )

    const closeButton = screen.getByTestId('modal-close-btn')
    await userEvent.click(closeButton)

    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1))
  })

  it('should call onClose when backdrop is clicked', async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Modal isOpen={true} onClose={onClose}>
          <div>Modal Content</div>
        </Modal>
      </ThemeProvider>
    )

    const backdrop = screen.getByTestId('modal-backdrop')
    await userEvent.click(backdrop)

    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1))
  })
})
