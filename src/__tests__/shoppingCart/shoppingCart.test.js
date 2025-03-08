import '@testing-library/jest-dom'
import { waitFor,act,fireEvent } from "@testing-library/react"
import ShoppingCart from 'pages/ShoppingCart'
import { setupCartWith1Item, setupCartWith2Items } from "utils/reduxSetupForTest";

describe('shopping cart tests',()=>{

    it('render shopping cart that has two items',async ()=>{
        const { getByText,getByTestId } = setupCartWith2Items(ShoppingCart)
        await waitFor(() => {
            expect(getByText('Mens Casual Premium Slim')).toBeInTheDocument();
            expect(getByText('Fjallraven - Foldsack No.')).toBeInTheDocument();
            expect(getByText('totalPrice:352.15$')).toBeInTheDocument();
            expect(getByText('3')).toBeInTheDocument();
            expect(getByText('1')).toBeInTheDocument();
            expect(getByTestId('trashIcon-1')).toBeInTheDocument();
            expect(getByTestId('trashIcon-2')).toBeInTheDocument();
            expect(getByText('سبد خرید')).toBeInTheDocument();  
        })

    })

    it('increase quantity of a product',async ()=>{
        const { getByText,getByTestId } = setupCartWith1Item(ShoppingCart)

        const increaseQuantityButton = getByText('+');
        await act(async () => {
            fireEvent.click(increaseQuantityButton);
        })

        setTimeout(() => {
            expect(queryByText('totalPrice:439.80$')).toBeInTheDocument();
            expect(getByText('4')).toBeInTheDocument();
            expect(getByText('Fjallraven - Foldsack No.')).toBeInTheDocument();
            expect(getByTestId('trashIcon-1')).toBeInTheDocument();
        }, 2000);
    })

    it('decrease quantity of a product',async ()=>{
        const { getByText,getByTestId } = setupCartWith1Item(ShoppingCart)

        const decreaseQuantityButton = getByText('-');
        await act(async () => {
            fireEvent.click(decreaseQuantityButton);
        })

        setTimeout(() => {
            expect(queryByText('totalPrice:219.90$')).toBeInTheDocument();
            expect(getByText('2')).toBeInTheDocument();
            expect(getByText('Fjallraven - Foldsack No.')).toBeInTheDocument();
            expect(getByTestId('trashIcon-1')).toBeInTheDocument();
        }, 2000);

    })

    it('remove a product from shopping cart',async ()=>{
        const { getByText,getByTestId } = setupCartWith1Item(ShoppingCart)

        const removeButton = getByTestId('trashIcon-1');
        await act(async () => {
            fireEvent.click(removeButton);
        })

        setTimeout(() => {
            expect(queryByText('totalPrice:0.00$')).toBeInTheDocument();
            expect(getByText('Fjallraven - Foldsack No.')).toBeNull();
        }, 2000);

    })
})