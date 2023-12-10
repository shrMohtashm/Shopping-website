import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ShoppingCartButton from '../Components/navbar/ShoppingCartButton';

const mockStore = configureStore([]);

describe('ShoppingCartButton', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
        status: 'idle',
        entities: [],
        cart: [],
        number: 0,
        error: '',
    
    });
  });

  test('renders empty ShoppingCartButton', () => {
     render(
      <Provider store={store}>
        <ShoppingCartButton />
      </Provider>
    );
    expect(screen.getByText(/سبدخرید/i)).toBeInTheDocument();
    expect(screen.getByText('خالی است')).toBeInTheDocument();
    // expect(screen.getByTestId('cart-count')).toBeInTheDocument();
  })
})
