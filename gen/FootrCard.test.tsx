import React from 'react'
import { describe, it, expect, vi} from 'vitest'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../src/styles/theme.ts'
import { render, RenderResult, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import { FooterCard } from '../src/components/FooterCard'

const renderWithProviders = (ui: React.ReactElement): RenderResult => {
    return render(
      <ThemeProvider theme={lightTheme}>
        <BrowserRouter>
          {ui}
        </BrowserRouter>
      </ThemeProvider>
    );
  };
  
  describe('FooterCard', () => {
    it('renders correctly with title and links', () => {
      renderWithProviders(
        <FooterCard title="Test Title" links={[{ name: 'Test Link', href: '/test' }]}>
          <div>Test Child</div>
        </FooterCard>
      );
  
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Test Link')).toBeInTheDocument();
      expect(screen.getByText('Test Child')).toBeInTheDocument();
    });
  
    it('renders external links correctly', () => {
      renderWithProviders(
        <FooterCard title="Test Title" links={[{ name: 'External Link', href: 'https://example.com', external: true }]}>
          <div>Test Child</div>
        </FooterCard>
      );
  
      const externalLink = screen.getByText('External Link');
      expect(externalLink).toBeInTheDocument();
      expect(externalLink.closest('a')).toHaveAttribute('href', 'https://example.com');
      expect(externalLink.closest('a')).toHaveAttribute('target', '_blank');
      expect(externalLink.closest('a')).toHaveAttribute('rel', 'noopener noreferrer');
    });
  
    it('renders internal links correctly', () => {
      renderWithProviders(
        <FooterCard title="Test Title" links={[{ name: 'Internal Link', href: '/internal' }]}>
          <div>Test Child</div>
        </FooterCard>
      );
  
      const internalLink = screen.getByText('Internal Link');
      expect(internalLink).toBeInTheDocument();
      expect(internalLink.closest('a')).toHaveAttribute('href', '/internal');
    });
  });