import React from 'react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { Portal } from '../src/components/Portal.tsx'


describe('Portal Component', () => {
  it('should call document.querySelector with the correct selector', () => {
    const spy = vi.spyOn(document, 'querySelector').mockReturnValue(document.createElement('div'))

    render(<Portal selector="#test-id">Hello World</Portal>)

    expect(spy).toHaveBeenCalledWith('#test-id')
    spy.mockRestore()
  })

  it('should render children inside the portal when selector matches an element',() => {
    const portalElement = document.createElement('div')
    portalElement.id = 'test-id'
    document.body.appendChild(portalElement)

    render(<Portal selector="#test-id">Hello Portal</Portal>)

    expect(portalElement.innerHTML).toContain('Hello Portal')

  })

  it('should render error message if selector does not match any element', () => {
    render(<Portal selector="#invalid-id">Hello Error</Portal>)

    expect(screen.queryByText('Hello Error')).not.toBeInTheDocument()
  })
})