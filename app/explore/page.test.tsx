import { render, screen } from '@testing-library/react';
import Explore from './page';

describe('explore/page component', () => {
  beforeEach(() => {
    render(<Explore />);
  })

  test('renders explore/page component', () => {
    const heroText = screen.getByText('Discover the Ages: Explore Masterpieces by Artist');
    expect(heroText).toBeInTheDocument();
  });

  test('renders all artist cards', () => {
    const artistNames = ['Vincent van Gogh', 'Rembrandt van Rijn', 'Johannes Vermeer'];
    artistNames.forEach(name => {
      const cardTitle = screen.getByText(name);
      expect(cardTitle).toBeInTheDocument();
    });
  })
})
