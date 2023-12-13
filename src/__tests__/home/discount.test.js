import React from 'react';
import { render } from '@testing-library/react';
import Discount from '../../Components/Home/Discount';
import '@testing-library/jest-dom'

describe('Discount component', () => {

  test('renders Discount component correctly', () => {

    const { getByText, getByAltText, getAllByText, getByRole } = render(<Discount />)

    const header = getByRole('heading', {
      name: /جشنواره تخفیف/i
    })

    const firstShoeImg = getByAltText('nOdyssey React Shield')
    const secondShoeImg = getByAltText('nike-air-shoe1')
    const thirdShoeImg = getByAltText('nike-air-shoe2')
    const size = getAllByText('سایز')
    const discountButton2 = getByRole('link', {
      name: /26%تخفیف/i
    })

    expect(header).toBeInTheDocument();
    expect(firstShoeImg).toBeInTheDocument();
    expect(secondShoeImg).toBeInTheDocument();
    expect(thirdShoeImg).toBeInTheDocument();
    expect(size).not.toBeNull();
    expect(discountButton2).toBeInTheDocument();

  });
});