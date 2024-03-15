import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../counter';

test('renders the counter with initial value', () => {
  const { getByText } = render(<Counter />);
  const countElement = getByText('0');
  expect(countElement).toBeInTheDocument();
});

test('increments the count when the "+" button is clicked', () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText('+');
  const countElement = getByText('0');

  fireEvent.click(incrementButton);

  expect(countElement.textContent).toBe('1');
});

test('decrements the count when the "-" button is clicked', () => {
  const { getByText } = render(<Counter />);
  const decrementButton = getByText('-');
  const countElement = getByText('0');

  fireEvent.click(decrementButton);

  expect(countElement.textContent).toBe('-1');
});
