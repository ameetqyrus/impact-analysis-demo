import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders footer with correct text', () => {
  render(<Footer />);
  const footerElement = screen.getByText(/Impact Analysis Demo/i);
  expect(footerElement).toBeInTheDocument();
});