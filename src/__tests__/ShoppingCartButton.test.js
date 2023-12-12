import * as React from 'react'
import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import ShoppingCartBotton from '../Components/Navbar/ShoppingCartButton'
import configureStore from 'redux-mock-store'
import { Provider, useDispatch, useSelector } from 'react-redux';



 
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
  }));


    test('renders empty ShoppingCartButton', async  () => {
        const initialState = {
            products: {
                status: 'idle',
                entities: [],
                cart: [],
                number: 0,
                error: ''
    
            }
        }
        const mockStore = configureStore()
        const mockstore = mockStore(initialState)
        const mockCartItems = [ ];
          
          const mockProducts = [
            { id: 1, name: 'Product 1', description: 'Description 1' },
            { id: 2, name: 'Product 2', description: 'Description 2' },
          ];
          
        useSelector.mockReturnValueOnce(mockCartItems);
        useSelector.mockReturnValueOnce(mockProducts);
        useSelector.mockReturnValueOnce(0);
        
        render(
            <Provider store={mockstore}>
                <ShoppingCartBotton />
            </Provider>
        )
        await waitFor(() => {
            expect(screen.getByText('خالی است')).toBeInTheDocument();
        });
    
    })
