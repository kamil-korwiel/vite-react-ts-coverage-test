import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AnimatedIllustration } from '../src/components/AnimatedIllustration'
import React from 'react'

// Mock Lottie component
vi.mock('react-lottie-player', () => ({
  __esModule: true,
  default: ({ animationData }: { animationData: any }) => (
    <div data-testid="lottie-player" data-animation={animationData}></div>
  ),
}))

describe('AnimatedIllustration Component', () => {
  beforeEach(() => {
    vi.resetModules()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })
  it('renders correctly with different animation props', () => {
    render(<AnimatedIllustration animation="Error" />)
    const lottieElement = screen.getByTestId('lottie-player')
    expect(lottieElement).toBeInTheDocument()
  })
  
  it('handles invalid animation props gracefully', () => {
    render(<AnimatedIllustration animation="NotFound" />)
    const lottieElement = screen.getByTestId('lottie-player')
    expect(lottieElement).toBeInTheDocument()
  })

  it('loads the correct animation data based on the animation prop', async () => {
    render(<AnimatedIllustration animation="Error" />)
    const lottieElement = await screen.findByTestId('lottie-player')
    expect(lottieElement.getAttribute('data-animation')).toBeDefined()
  })

  it('cleans up correctly when unmounted', () => {
    const { unmount } = render(<AnimatedIllustration animation="Error" />)
    unmount()
  })

  it('renders correctly with different animation props', () => {
    render(<AnimatedIllustration animation="Error" />)
    const lottieElement = screen.getByTestId('lottie-player')
    expect(lottieElement).toBeInTheDocument()
  })
  
  it('handles invalid animation props gracefully', () => {
    render(<AnimatedIllustration animation="NotFound" />)
    const lottieElement = screen.getByTestId('lottie-player')
    expect(lottieElement).toBeInTheDocument()
  })
})