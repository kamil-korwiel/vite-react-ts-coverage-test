import React from 'react'
import { describe, it, expect, vi} from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import { Portal } from '../src/components/Portal.tsx'
import userEvent from '@testing-library/user-event'

// Mocking a DOM element that would serve as the target for the portal
// document.body.innerHTML = `
//   <div id="portal-root"></div>
//   <div id="another-root"></div>
// `

// describe('Portal', () => {
//   it('renders children into the correct element based on the selector', () => {

//     render(
//       <Portal selector="#portal-root">
//         <div data-testid="Port_my">Portal Content</div>
//       </Portal>
//     )
//     console.log(document.body.innerHTML)
//     const portalRoot = document.getElementById('portal-root')
//     expect(portalRoot).toContainElement(screen.getByText('Portal Content'))
//   })

//   it('renders nothing if the selector does not match any element', () => {
//     // Render the Portal component with a selector that doesn't exist
//     render(
//       <Portal selector="#nonexistent-root">
//         <div>Should not render</div>
//       </Portal>
//     )

//     // Check that no elements are rendered in the body
//     const nonExistentRoot = document.getElementById('nonexistent-root')
//     expect(nonExistentRoot).not.toContainElement(screen.getByText('Should not render'))
//   })

//   it('updates the portal target if the selector changes', () => {
//     // Create a mock for the `querySelector` to simulate changing the selector
//     const querySelectorMock = vi.spyOn(document, 'querySelector')

//     // Initially, render the Portal with a selector pointing to #portal-root
//     const { rerender } = render(
//       <Portal selector="#portal-root">
//         <div>Initial Content</div>
//       </Portal>
//     )

//     // Check if it renders in #portal-root
//     expect(document.getElementById('portal-root')).toContainElement(screen.getByText('Initial Content'))

//     // Now, rerender with a new selector (#another-root)
//     rerender(
//       <Portal selector="#another-root">
//         <div>Updated Content</div>
//       </Portal>
//     )

//     // Check if the content is now in #another-root
//     expect(document.getElementById('another-root')).toContainElement(screen.getByText('Updated Content'))

//     querySelectorMock.mockRestore()
//   })
// })