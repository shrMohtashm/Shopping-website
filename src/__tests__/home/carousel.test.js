import React from 'react';
import { render, fireEvent,screen  } from '@testing-library/react';
import Carousel from 'components/Home/Carousel';
import '@testing-library/jest-dom'

describe('Carousel component', () => {
  it('renders Carousel component correctly', () => {

    const { getByAltText, getByTestId } = render(<Carousel />);

    const slide1 = getByAltText('Slide 1');
    const slide2 = getByAltText('Slide 2');
    const prevButton = getByTestId('previous-button');
    const nextButton = getByTestId('next-button');

    fireEvent.click(nextButton);
    fireEvent.click(prevButton);


    expect(slide1).toBeInTheDocument();
    expect(slide2).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  });

  it('allows navigation through slides', () => {
    render(<Carousel />);
    
    //click on next button
    fireEvent.click(screen.getByTestId('next-button'));
    expect(screen.getByAltText(/Slide 2/i)).toBeInTheDocument();

    //click on previous buttob
    fireEvent.click(screen.getByTestId('previous-button'));
    expect(screen.getByAltText(/Slide 1/i)).toBeInTheDocument();
  });
});

