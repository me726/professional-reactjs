import { render, screen } from '@testing-library/react';
import Product from './Product.js';

test('Product component test', () => {
  render(<Product />);
  const linkElement = screen.getByText(/Published/i);
  expect(linkElement).toBeInTheDocument();
});
