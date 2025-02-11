import React from "react";
import { render, screen } from "@testing-library/react";
import { Category } from "../src/components/Category";
import { lightTheme, darkTheme } from '../src/styles/theme.ts'
import { describe, it, expect } from 'vitest'
import { ThemeProvider } from 'styled-components'

describe('Category Component', () => {
  it('renders correctly with round prop as true', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Category title="Test Category" photoUrl="test.jpg" round={true} />
      </ThemeProvider>
    );
    const categoryElement = screen.getByTestId('Test Category');
    expect(categoryElement).toBeInTheDocument();
    expect(categoryElement).toHaveTextContent('Test Category');
  });

  it('renders correctly with round prop as false', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Category title="Test Category" photoUrl="test.jpg" round={false} />
      </ThemeProvider>
    );
    const categoryElement = screen.getByTestId('Test Category');
    expect(categoryElement).toBeInTheDocument();
    expect(categoryElement).toHaveTextContent('Test Category');
  });

  it('renders correctly with dark theme', () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Category title="Test Category" photoUrl="test.jpg" round={false} />
      </ThemeProvider>
    );
    const categoryElement = screen.getByTestId('Test Category');
    expect(categoryElement).toBeInTheDocument();
    expect(categoryElement).toHaveTextContent('Test Category');
  });

  it('renders image with correct src and alt attributes', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Category title="Test Category" photoUrl="test.jpg" round={false} />
      </ThemeProvider>
    );
    const imageElement = screen.getByAltText('restaurant category');
    expect(imageElement).toHaveAttribute('src', 'test.jpg');
    expect(imageElement).toHaveAttribute('alt', 'restaurant category');
  });
});