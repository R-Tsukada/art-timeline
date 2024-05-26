import { render, screen } from '@testing-library/react'
import Page from './page'
import { usePathname } from 'next/navigation'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

describe('Page component', () => {
  beforeEach(() => {
    ;(usePathname as jest.Mock).mockReturnValue('/artist/1')
    render(<Page />)
  })

  test('renders Page component', () => {
    expect(screen.getByText('Hello World1')).toBeInTheDocument()
  })
})
