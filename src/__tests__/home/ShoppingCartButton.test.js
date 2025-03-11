import { waitFor, fireEvent, act } from "@testing-library/react";
import '@testing-library/jest-dom'
import ShoppingCartButton from 'components/Navbar/ShoppingCartButton'
import { setupCartWith2Items } from 'utils/reduxSetupForTest';
import { setupCartWith1Item } from 'utils/reduxSetupForTest';
import { setupEmptyCart } from 'utils/reduxSetupForTest';
describe('shoppingCartButton component', () => {

    test('displays the empty cart', async () => {
        const { getByText } = setupEmptyCart(ShoppingCartButton)
        await waitFor(() => {
            expect(getByText('0')).toBeInTheDocument();
            expect(getByText('0')).toHaveClass('badge bg-success rounded-pill')
            expect(getByText(/Cart/i)).toBeInTheDocument();
            expect(getByText(/Empty/i)).toBeInTheDocument();
            expect(getByText(/Empty/i)).toHaveClass('text-center');
        })
    })

    test('displays the cart with 2 items', async () => {
        const { getByText } = setupCartWith2Items(ShoppingCartButton)
        await waitFor(() => {
            expect(getByText('4')).toBeInTheDocument();
            expect(getByText('4')).toHaveClass('badge bg-success rounded-pill')
            expect(getByText('checkout')).toBeInTheDocument();
            expect(getByText('checkout')).toHaveClass('btn btn-dark btn-sm d-block w-100')
            expect(getByText('Mens')).toBeInTheDocument();
            expect(getByText('Fjallraven')).toBeInTheDocument();
        })
    })

    test('remove a item from cart that has 2 items', async () => {
        const { getByTestId, queryByText } = setupCartWith2Items(ShoppingCartButton)

        const removeButton = getByTestId('button-1');
        await act(async () => {
            fireEvent.click(removeButton);
        })

        setTimeout(() => {
            expect(queryByText('Fjallraven')).toBeNull();
            expect(getByText('1')).toBeInTheDocument();
            expect(getByText('checkout')).toBeInTheDocument();
            expect(getByText('Mens')).toBeInTheDocument();
        }, 2000);
    })


    test('remove a item from cart that has only one item', async () => {
        const { getByTestId, queryByText } = setupCartWith1Item(ShoppingCartButton)
        const removeButton = getByTestId('button-1');

        await act(async () => {
            fireEvent.click(removeButton);
        })

        setTimeout(() => {
            expect(queryByText('Fjallraven')).toBeNull();
            expect(getByText('0')).toBeInTheDocument();
            expect(getByText('checkout')).toBeNull();
            expect(getByText(/Empty/i)).toBeInTheDocument();
        }, 2000);
    })

})


