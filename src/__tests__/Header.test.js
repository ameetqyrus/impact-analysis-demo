import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders header with correct text', () => {
  render(<Header />);
  const headerElement = screen.getByText(/Impact Analysis Demo/i);
  expect(headerElement).toBeInTheDocument();
});