import { render, screen } from '@testing-library/react';
import Footer from './footer';

describe('Footer component', () => {
  test('renders Footer component', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  })

  test('contains correct links', () => {
    render(<Footer />);
    const contactLink = screen.getByRole('link', { name: /contact/i });
    const twitterLink = screen.getByRole('link', { name: 'Twitter'});
    const githubLink = screen.getByRole('link', { name: 'GitHub' });
    expect(contactLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
    expect(contactLink.getAttribute('href')).toBe('https://twitter.com/ryo02730590');
    expect(twitterLink.getAttribute('href')).toBe('https://twitter.com/ryo02730590');
    expect(githubLink.getAttribute('href')).toBe('https://github.com/R-Tsukada');
  });


  test('contains correct copyright text', () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/© 2024 ryo-tsukada. All rights reserved./i);
    expect(copyrightText).toBeInTheDocument();
  });
})
