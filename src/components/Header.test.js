import React from 'react';
import { render, cleanup } from '@testing-library/react';
import 'jest-dom/extend-expect';
import Header from './Header';

afterEach(cleanup);

it('renders', () => {
  const { asFragment } = render(<Header text="Hello" />);
  expect(asFragment()).toMatchSnapshot();
});

it('inserts text into h1', () => {
  const { getByTestId, getByText } = render(<Header text="Hello!" />);
  expect(getByTestId('hitag')).toHaveTextContent('Hello!');
  expect(getByText('Hello!')).toHaveClass('fancy-h1');
});
