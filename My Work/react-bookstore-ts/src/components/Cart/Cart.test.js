import { render, screen } from '@testing-library/react';
import Cart from './Cart.js';

test('Cart component test', () => {
  render(<Cart />);
  const linkElement = screen.getByText(/Total:/i);
  expect(linkElement).toBeInTheDocument();
});
