import React from 'react';
import { render } from '@testing-library/react';
import Discount from 'components/Home/Discount';
import '@testing-library/jest-dom'

describe('Discount component', () => {

  test('renders Discount component correctly', () => {

    const { getByText, getByAltText, getAllByText, getByRole } = render(<Discount />)

    const header = getByRole('heading', {
      name: /Special Discounts/i
    })

    const firstShoeImg = getByAltText('Odyssey React Shield')
    const secondShoeImg = getByAltText('Nike Air Shoe 1')
    const thirdShoeImg = getByAltText('Nike Air Shoe 2')
    const size = getAllByText('Size')
    const discountButton2 = getByRole('link', {
      name: /26% off/i
    })

    expect(header).toBeInTheDocument();
    expect(firstShoeImg).toBeInTheDocument();
    expect(secondShoeImg).toBeInTheDocument();
    expect(thirdShoeImg).toBeInTheDocument();
    expect(size).not.toBeNull();
    expect(discountButton2).toBeInTheDocument();

  });
});