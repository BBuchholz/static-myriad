import { render, screen } from '@testing-library/react';
import App from './App';

test('renders myriad somewhere on page', () => {
  render(<App />);
  const linkElement = screen.getByText(/myriad/i);
  expect(linkElement).toBeInTheDocument();
});
