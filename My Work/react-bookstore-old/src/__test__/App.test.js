import { render, screen } from '@testing-library/react';
import App from '../App';

test('Aapplication test - Header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to React Bookstore/i);
  expect(linkElement).toBeInTheDocument();
});

test('Aapplication test - Main', () => {
  render(<App />);
  const linkElement = screen.getByText(/We have several books. Feel free to browse for as long as you like. Click on a cover image to see details, or click the Add to Cart button to add a book to your shopping cart./i);
  expect(linkElement).toBeInTheDocument();
});

test('Aapplication test - Footer', () => {
  render(<App />);
  const linkElement = screen.getByText(/This is the footer./i);
  expect(linkElement).toBeInTheDocument();
});
