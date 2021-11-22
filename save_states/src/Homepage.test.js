import { render, screen } from '@testing-library/react';
import Gamepage from './Gamepage';

test('renders learn react link', () => {
  render(<Gamepage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
