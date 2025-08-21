// must be before importing App
jest.mock('@mantine/hooks', () => {
  const actual = jest.requireActual('@mantine/hooks');
  return { ...actual, useMediaQuery: () => false };
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
