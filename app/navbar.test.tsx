import { render, screen, waitFor } from '@testing-library/react';
import Navbar from './navbar';
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
    return <a href={href} onClick={() => mockRouter.push(href)}>{children}</a>;
  }
  MockLink.displayName = 'Link';
  return MockLink;
})

describe('Navbar component', () => {
  beforeEach(() =>{
    mockRouter.setCurrentUrl('/explore');
    render(<Navbar />)
  })

  test('renders navbar component', () => {
    expect(screen.getByText('Art Timeline')).toBeInTheDocument();
  })

  test('navigates to / when get started button is clicked', async () => {
    mockRouter.setCurrentUrl('/explore');
    const getStartedButton = screen.getByRole('link', { name: /Art Timeline/i});
    userEvent.click(getStartedButton);

    await waitFor(() => expect(mockRouter.asPath).toBe('/'))
  })
})
