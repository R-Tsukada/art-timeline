import Explore from './page'
import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mockRouter from 'next-router-mock'
import { ReactNode } from 'react'

jest.mock('next/router', () => require('next-ruter-mock'))

jest.mock('next/link', () => {
  interface MockLinkProps {
    children: ReactNode
    href: string
  }

  const MockLink = ({ children, href }: MockLinkProps) => {
    return (
      <a href={href} onClick={() => mockRouter.push(href)}>
        {children}
      </a>
    )
  }
  MockLink.displayName = 'Link'
  return MockLink
})

describe('Explore component', () => {
  test('renders Explore component', () => {
    render(<Explore />)
    const heading = screen.getByText('Discover the Ages: Explore Masterpieces by Artist')
    expect(heading).toBeInTheDocument()
  })

  test('renders initial artist list', () => {
    render(<Explore />)
    const artistNames = ['Vincent van Gogh', 'Rembrandt van Rijn', 'Johannes Vermeer']
    artistNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  test('updates selected artist on button click', async () => {
    render(<Explore />)
    const selectButtons = screen.getAllByText('Select')
    await userEvent.click(selectButtons[0])

    await waitFor(() => {
      const selectedCards = screen.getAllByText('Vincent van Gogh')
      selectedCards.forEach((card) => {
        const selectedCard = card.closest('.card')
        expect(selectedCard).toHaveClass('bg-blue-100')
      })
    })
  })

  test('updates selected artist correctly when another button is clicked', async () => {
    render(<Explore />)
    const selectButtons = screen.getAllByText('Select')
    await userEvent.click(selectButtons[0])
    await userEvent.click(selectButtons[1])
    await waitFor(() => {
      const rembrandtCards = screen.getAllByText('Rembrandt van Rijn')
      rembrandtCards.forEach((card) => {
        const selectedCard = card.closest('.card')
        expect(selectedCard).toHaveClass('bg-blue-100')
      })

      const vanGoghCards = screen.getAllByText('Vincent van Gogh')
      vanGoghCards.forEach((card) => {
        const deselectedCard = card.closest('.card')
        expect(deselectedCard).not.toHaveClass('bg-blue-100')
      })
    })
  })

  test('navigate to /artist/[artistName] when get started button is clicked', async () => {
    render(<Explore />)
    mockRouter.setCurrentUrl('/explore')
    const selectButtons = screen.getAllByText('Select')
    await userEvent.click(selectButtons[0])
    const startButton = screen.getByRole('button', { name: /start/i })
    expect(startButton).toBeInTheDocument()
    await userEvent.click(startButton)
    expect(mockRouter.asPath).toBe('/artist/1')
  })
})
