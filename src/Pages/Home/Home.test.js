import React from 'react';
//import axios from 'axios'
import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event'
import Header from '../../Components/UIElements/Header';
//import Home from './Home'

jest.mock('axios') 

describe('Home', () => {
  test('renders content based on user auth status', () => {
    render(<Header />);
    expect(screen.getByText('Sign in to continue ...')).toBeInTheDocument();
  });
// describe('Home', ()=>{
//   test('fetch lessons from the API and displays them', async () => {
//     const lessons = [
//       { summary: 'SMA 2305', description: 'Complex Analysis 1',location:'Hall 7 Lecture Hall, Juja', start: '2020-09-25T14:00:30', end:'2020-09-25T16:00:30', status: 'confirmed',hangoutLink:'/'  }
//     ];
 
//     axios.get.mockImplementationOnce(() =>
//       Promise.resolve({ data: { event: lessons } })
//     );
 
//     render(<Home />);
//     screen.getByRole('')
 
//     // const items = await screen.findAllByRole('listitem');
 
//     // expect(items).toHaveLength(2);
//   });
// })

});