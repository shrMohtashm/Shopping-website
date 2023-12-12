import React from 'react';
import { render } from '@testing-library/react';
import Discount from '../Components/Home/Discount';
import '@testing-library/jest-dom'

describe('Discount component', () => {

  test('renders Discount component correctly', () => {

    const { getByText, getByAltText } = render(<Discount />);
    
    const header = getByText('جشنواره تخفیف');
    expect(header).toBeInTheDocument();

 
    const nikeImage1 = getByAltText('nOdyssey React Shield');;
    expect(nikeImage1).toBeInTheDocument();
  });
});