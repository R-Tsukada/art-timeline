import { render, screen } from '@testing-library/react';
import Navar from './navbar';

test('renders navbar component', () => {
  render(<Navar />);
  expect(screen.getByText('Art Timeline')).toBeInTheDocument();
})
