import { render, screen } from '@testing-library/react';
import Main from './Main';

test('Main component test', () => {
  render(<Main />);
  const linkElement = screen.getByText(/Products/i);
  expect(linkElement).toBeInTheDocument();
});
