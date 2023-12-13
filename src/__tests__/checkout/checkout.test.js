import React from "react";
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor, getByTestId, getByText } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import Checkout from '../../Pages/Checkout'
import { setupCartWith2Items } from "../../utils/reduxSetupForTest";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
  }));

  describe('Checkout Component', () => {
    test('render component correctly', () => {

        const { getByLabelText,getByText } = setupCartWith2Items(Checkout);
        expect(getByLabelText('نام و نام خانوادگی')).toBeInTheDocument()
        expect(getByLabelText('ایمیل')).toBeInTheDocument()
        expect(getByLabelText('رمزعبور')).toBeInTheDocument()
        expect(getByLabelText('تکرار رمزعبور')).toBeInTheDocument()
        expect(getByText('جهت دریافت لوکیشن روی نقشه کلیک کنید')).toBeInTheDocument()
        expect(getByText(' مبلغ پرداختی: $352.15')).toBeInTheDocument()  
    })

    })

