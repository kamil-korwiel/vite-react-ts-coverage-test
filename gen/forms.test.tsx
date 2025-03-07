import React from 'react'
import { describe, it, expect, vi} from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import { Input } from '../src/components/forms/Input.tsx'
import { Select } from '../src/components/forms/Select.tsx'
import userEvent from '@testing-library/user-event'

describe('Input component', () => {
  it('renders correctly with label', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Input label="Test Label" id="test-input" />
      </ThemeProvider>
    )
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument()
  })

  it('calls onChange when input value changes', async () => {
    const handleChange = vi.fn()
    render(
      <ThemeProvider theme={lightTheme}>
        <Input label="Test Label" id="test-input" onChange={handleChange} />
      </ThemeProvider>
    )
    const input = screen.getByLabelText('Test Label')
    await userEvent.type(input, 'test')
    expect(handleChange).toHaveBeenCalled()
  })

  it('calls onChange when input value changes and presses enter', async () => {
    const handleChange = vi.fn()
    render(
      <ThemeProvider theme={lightTheme}>
        <Input label="Test Label" id="test-input" onChange={handleChange} />
      </ThemeProvider>
    )
    const input = screen.getByLabelText('Test Label')
    await userEvent.type(input, 'test{enter}')
    expect(handleChange).toHaveBeenCalled()
  })
})

describe('Select component', () => {
  it('renders correctly with options and label', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Select label="Test Select" id="test-select" options={['Option 1', 'Option 2']} />
      </ThemeProvider>
    )
    expect(screen.getByLabelText('Test Select')).toBeInTheDocument()
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })

  it('calls onChange when option is selected', async () => {
    const handleChange = vi.fn()
    render(
      <ThemeProvider theme={lightTheme}>
        <Select label="Test Select" id="test-select" options={['Option 1', 'Option 2']} onChange={handleChange} />
      </ThemeProvider>
    )
    screen.debug()
    const select = screen.getByRole('combobox')
    await userEvent.click(select)
    screen.debug()
    await userEvent.selectOptions(select, 'Option 1')
    await userEvent.selectOptions(select, 'Option 1')
    expect(handleChange).toHaveBeenCalled()
  })
})