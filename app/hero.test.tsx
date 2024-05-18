import { render, screen, waitFor } from '@testing-library/react';
import Hero from './hero';
import mockRouter from 'next-router-mock';
import userEvent from '@testing-library/user-event';
import { ReactNode } from 'react';

jest.mock('next/router', () => require('next-router-mock'));

jest.mock('next/link', () => {
  interface MockLinkProps {
    children: ReactNode;
    href: string;
  }

  const MockLink = ({ children, href }: MockLinkProps) => {
    console.log({children, href})
    return <a href={href} onClick={() => mockRouter.push(href)}>{children}</a>;
  }
  MockLink.displayName = 'Link';
  return MockLink;
});

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

  test('navigates to /explore when get started button is clicked', async () => {
    mockRouter.setCurrentUrl('/');
    const getStartedButton = screen.getByRole('button', { name: /get started/i });
    userEvent.click(getStartedButton);
    await waitFor(() => expect(mockRouter.asPath).toEqual('/explore'));
  });
})
