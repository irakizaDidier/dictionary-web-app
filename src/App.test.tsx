import { render, screen } from '@testing-library/react';
import App from './App';

test('renders search box with placeholder text', () => {
  render(<App />);

  const inputElement = screen.getByPlaceholderText(/Search for any word/i);
  expect(inputElement).toBeInTheDocument();
});
