import { render, screen } from '@testing-library/react';
import ProductList from './ProductList.js';

test('ProductList component test', () => {
  render(<ProductList />);
  const linkElement = screen.getByText(/Products/i);
  expect(linkElement).toBeInTheDocument();
});
