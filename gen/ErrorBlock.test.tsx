import React from "react";
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { ThemeProvider } from 'styled-components'
import { ErrorBlock } from '../src/components/ErrorBlock/ErrorBlock'
import { lightTheme } from '../src/styles/theme.ts'



describe('ErrorBlock', () => {
    const props = {
        title: 'Error Title',
        image: <img src="error.png" alt="Error" />,
        body: 'This is an error message.',
        buttonText: 'Retry',
        onButtonClick: vi.fn(),
    }

    const renderWithTheme = (component: React.ReactNode) => {
        return render(<ThemeProvider theme={lightTheme}>{component}</ThemeProvider>)
    }

    it('renders the title', () => {
        renderWithTheme(<ErrorBlock {...props} />)
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(props.title)
    })

    it('renders the image', () => {
        renderWithTheme(<ErrorBlock {...props} />)
        expect(screen.getByAltText('Error')).toBeInTheDocument()
    })

    it('renders the body text', () => {
        renderWithTheme(<ErrorBlock {...props} />)
        expect(screen.getByText(props.body)).toBeInTheDocument()
    })

    it('renders the button with correct text', () => {
        renderWithTheme(<ErrorBlock {...props} />)
        expect(screen.getByRole('button')).toHaveTextContent(props.buttonText)
    })

    it('calls onButtonClick when button is clicked', async () => {
        renderWithTheme(<ErrorBlock {...props} />)
        
        const user = userEvent.setup()
        await user.click(screen.getByRole('button'))

        expect(props.onButtonClick).toHaveBeenCalledTimes(1)
    })

    it('does not render an image if not provided', () => {
        const { image, ...restProps } = props

        renderWithTheme(<ErrorBlock {...restProps} />)

        expect(screen.queryByAltText('Error')).not.toBeInTheDocument()
    })

    it('renders correctly with different props', () => {
        const newProps = {
            title: 'New Error Title',
            image: <img src="new-error.png" alt="New Error" />,
            body: 'This is a new error message.',
            buttonText: 'Try Again',
            onButtonClick: vi.fn(),
        }
        renderWithTheme(<ErrorBlock {...newProps} />)
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(newProps.title)
        expect(screen.getByAltText('New Error')).toBeInTheDocument()
        expect(screen.getByText(newProps.body)).toBeInTheDocument()
        expect(screen.getByRole('button')).toHaveTextContent(newProps.buttonText)
    })

    it('renders without crashing', () => {
        renderWithTheme(<ErrorBlock {...props} />)
        expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    })

    it('matches snapshot', () => {
        const { asFragment } = renderWithTheme(<ErrorBlock {...props} />)
        expect(asFragment()).toMatchSnapshot()
    })
})