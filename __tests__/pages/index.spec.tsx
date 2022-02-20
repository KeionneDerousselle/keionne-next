import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Hello Next\.js 👋/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
