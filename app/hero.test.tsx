import { render, screen, waitFor } from '@testing-library/react';
import Hero from './hero';
import mockRouter from 'next-router-mock';
import userEvent from '@testing-library/user-event';
import { ReactNode } from 'react';

jest.mock('next/link', () => {
  interface MockLinkProps {
    children: ReactNode;
    href: string;
  }

  const MockLink = ({ children, href }: MockLinkProps) => {
    return <a href={href} onClick={() => mockRouter.push(href)}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('Hero component', () => {
  const originalError = console.error;
  beforeAll(() => {
    console.error = (...args) => {
      if (/Not implemented: navigation/.test(args[0])) {
        return;
      }
      originalError.call(console, ...args);
    };
  });

  afterAll(() => {
    console.error = originalError;
  });

  beforeEach(() => {
    mockRouter.setCurrentUrl('/');
    render(<Hero />);
  });

  test('renders Hero component', () => {
    const heroText = screen.getByText('Art Timeline');
    expect(heroText).toBeInTheDocument();
  });

  test('renders description', () => {
    const descriptionText = screen.getByText(/Explore the Art of Time: Journey through centuries of creativity, from ancient masterpieces to modern expressions. Discover how art has shaped history and continues to inspire the world today. Dive into the 'Art Timeline' and let each stroke tell its story./i);
    expect(descriptionText).toBeInTheDocument();
  });

  test('renders get started button', () => {
    const getStartedButton = screen.getByRole('link', { name: /get started/i });
    expect(getStartedButton).toBeInTheDocument();
  });

  test('navigates to /explore when get started button is clicked', async () => {
    const getStartedButton = screen.getByRole('link', { name: /get started/i });

    await userEvent.click(getStartedButton);

    await waitFor(() => {
      expect(mockRouter).toMatchObject({ pathname: '/explore' });
    });
  });
});

