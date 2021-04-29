import { render, screen } from '@testing-library/react';
import App from './App';

test('renders myriad somewhere on page', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/myriad/i)[0];
  expect(linkElement).toBeInTheDocument();
});

test('tinkering with jest', () => {
    expect(true).toBeTruthy();
});
