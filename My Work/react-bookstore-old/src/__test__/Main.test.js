import { render, screen } from '@testing-library/react';
import Main from '../Main';

test('Main component test', () => {
  render(<Main />);
  const linkElement = screen.getByText(/We have several books. Feel free to browse for as long as you like. Click on a cover image to see details, or click the Add to Cart button to add a book to your shopping cart./i);
  expect(linkElement).toBeInTheDocument();
});
