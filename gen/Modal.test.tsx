import React from 'react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen, waitFor } from '@testing-library/react'
import { Modal } from '../src/components/Modal'
import userEvent from '@testing-library/user-event'

// vi.mock('react-transition-group', async () => {
//     const actual = await vi.importActual('react-transition-group')
//     return {
//       ...actual,
//       CSSTransition: vi.fn(({ in: inProp, children, nodeRef }) => {
//         return inProp ? <div ref={nodeRef}>{children}</div> : null
//       }),
//     }
//   })
  
//   describe('Modal Component - Debug Test', () => {
//     beforeEach(() => {
//       // Ensure modal portal container exists
//       if (!document.getElementById('modalooo')) {
//         const modalRoot = document.createElement('div')
//         modalRoot.setAttribute('id', 'modal')
//         document.body.appendChild(modalRoot)
//       }
//     })
  
//     it('renders modal and logs the output', async () => {
//       render(
//         <ThemeProvider theme={lightTheme}>
//           <Modal isOpen={true} onClose={vi.fn()}>Test Modal</Modal>
//         </ThemeProvider>
//       )
  
//       // Wait for the modal to be present in the DOM
//       await new Promise((resolve) => setTimeout(resolve, 1000))
//         screen.debug()
//         const modal = screen.getByText('Test Modal')
        
//         expect(modal).toBeInTheDocument()
//     })
//   })
  