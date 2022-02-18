import { render, screen } from '@testing-library/react';
import Footer from './Footer.js';

test('Footer component test', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/This is the footer./i);
  expect(linkElement).toBeInTheDocument();
});
