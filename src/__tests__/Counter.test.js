import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders counter and buttons', () => {
  render(<Counter />);
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  expect(screen.getByText(/Increment/i)).toBeInTheDocument();
  expect(screen.getByText(/Decrement/i)).toBeInTheDocument();
});

test('increments count', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText(/Increment/i));
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});

test('decrements count', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText(/Decrement/i));
  expect(screen.getByText(/Count: -1/i)).toBeInTheDocument();
});