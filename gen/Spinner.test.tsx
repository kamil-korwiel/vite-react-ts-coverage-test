import React from 'react'
import { describe, it, expect} from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, screen } from '@testing-library/react'
import { Spinner } from '../src/components/Spinner/Spinner';

describe('Spinner', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Spinner />
      </ThemeProvider>
    );
    expect(screen.getByText('Looking for some food...')).toBeInTheDocument();
  });
});
