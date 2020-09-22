import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../Components/UIElements/Header';

jest.mock('axios') 

describe('Home', () => {
  test('renders content based on user auth status', () => {
    render(<Header />);
    expect(screen.getByText('Sign in to continue ...')).toBeInTheDocument();
  });

}); 