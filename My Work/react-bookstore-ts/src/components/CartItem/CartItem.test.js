import { render, screen } from '@testing-library/react';
import CartItem from './CartItem.js';

test('CartItem component test', () => {
  render(<CartItem />);
  const linkElement = screen.getByText(/by/i);
  expect(linkElement).toBeInTheDocument();
});
