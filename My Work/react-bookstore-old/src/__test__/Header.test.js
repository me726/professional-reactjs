import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('Header component test', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Welcome to React Bookstore/i);
  expect(linkElement).toBeInTheDocument();
});
