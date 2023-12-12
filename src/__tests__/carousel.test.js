import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from '../Components/Home/Carousel';
import '@testing-library/jest-dom'

describe('Carousel component', () => {
  test('renders Carousel component correctly', () => {

    const { getByAltText, getByTestId } = render(<Carousel />);
    
  
    const slide1 = getByAltText('Slide 1');
    const slide2 = getByAltText('Slide 2');


    const prevButton = getByTestId('previous-button');
    const nextButton = getByTestId('next-button');

  
    fireEvent.click(nextButton);
    fireEvent.click(prevButton);


    expect(slide1).toBeInTheDocument();
    expect(slide2).toBeInTheDocument();
  });
});

