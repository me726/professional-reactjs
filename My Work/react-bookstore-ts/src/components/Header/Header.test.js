import { render, screen } from '@testing-library/react';
import Header from './Header.js';

test('Header component test', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Welcome to the React Bookstore/i);
  expect(linkElement).toBeInTheDocument();
});
