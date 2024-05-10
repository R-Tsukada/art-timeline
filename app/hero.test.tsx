import { render, screen } from '@testing-library/react';
import Hero from './hero';

describe('Hero component', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  test ('renders Hero component', () => {
    const heroText = screen.getByText('Art Timeline');
    expect(heroText).toBeInTheDocument();
  })

  test('renders description', () => {
    const descriptionText = screen.getByText(/Explore the Art of Time: Journey through centuries of creativity, from ancient masterpieces to modern expressions. Discover how art has shaped history and continues to inspire the world today. Dive into the 'Art Timeline' and let each stroke tell its story./i);
    expect(descriptionText).toBeInTheDocument();
  });

  test('renders get started button', () => {
    const getStartedButton = screen.getByRole('button', { name: /get started/i });
    expect(getStartedButton).toBeInTheDocument();
  });
})
