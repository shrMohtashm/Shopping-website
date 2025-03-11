import '@testing-library/jest-dom'
import {  screen, fireEvent, waitFor, act } from "@testing-library/react"
import Checkout from 'pages/Checkout'
import { setupCartWith2Items } from "utils/reduxSetupForTest";
import userEvent from "@testing-library/user-event";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Checkout Component', () => {

  test('render component with 2 items correctly', () => {

    const { getByLabelText, getByText } = setupCartWith2Items(Checkout);
    expect(getByLabelText('Name')).toBeInTheDocument()
    expect(getByLabelText('email')).toBeInTheDocument()
    expect(getByLabelText('password')).toBeInTheDocument()
    expect(getByLabelText('confirm password')).toBeInTheDocument()

    setTimeout(() => {
      expect(getByText('Total Price:352.15$')).toBeInTheDocument()
    }, 1000)

  })

  test('submit form successfully',async ()=>{

    const { getByLabelText, findByText } = setupCartWith2Items(Checkout);

    await act(async () => {
        
    userEvent.type(getByLabelText('Name'), 'John Doe');
    userEvent.type(getByLabelText('email'), 'john@example.com');
    userEvent.type(screen.getByText('city'), 'اردبیل');
    userEvent.type(getByLabelText('password'), '12345');
    userEvent.type(getByLabelText('confirm password'), '123456');
  
    fireEvent.click(screen.getByText('Confirm'));
    })

    setTimeout(() => {
     findByText(`Your user information has been successfully registered`);
    },1000)

  })

  describe('test validation', () => {

    const submitForm = (label, testValue) => {
      const { getByLabelText, getByText } = setupCartWith2Items(Checkout);

      const input = getByLabelText(label);
      fireEvent.change(input, {
        target: { value: testValue }
      });

      const submitButton = getByText('Confirm');
      fireEvent.click(submitButton);
    }

    describe('name field validation', () => {
      test('displays an error when "name" field is left empty',  () => {
        submitForm('Name', '')
         waitFor(() => {
          expect(screen.getByText("Name field is required")).toBeInTheDocument();
        });
      })
    })

    describe('email field validation', () => {
      test('displays an error when email field is left empty',  () => {
        submitForm('email', '')
         waitFor(() => {
          expect(screen.getByText("Email field is required")).toBeInTheDocument();
        });
      })

      test('fill email field with notValid value',  () => {
        submitForm('email', '5558')
         waitFor(() => {
          expect(screen.getByText("Enter a valid email")).toBeInTheDocument();
        });
      })

      test('fill email field with valid value', () => {
        submitForm('email', 'someone@gmail.com')
        waitFor(() => {
          expect(screen.getByText("Enter a valid email")).not().toBeInTheDocument();
        });
      })
    })



    // describe('password field validation', () => {
    //   test('displays an error when password field is left empty',  () => {
    //     submitForm('رمزعبور', '')
    //      waitFor(() => {
    //       expect(screen.getByText('فیلد پسورد اجباری است')).toBeInTheDocument();
    //     });
    //   })

    //   test('displays an error when رمزعبور field is less than 4 character',  () => {
    //     submitForm('رمزعبور','123')
    //      waitFor(() => {
    //       expect(screen.getByText('پسورد حداقل 4 کاراکتر است')).toBeInTheDocument();
    //     });
    //   })

    //   test('displays an error when رمزعبور field is more than 20 character', () => {
    //     submitForm('رمزعبور','123456789123456789123')
    //      waitFor(() => {
    //       expect(screen.getByText('پسورد حداکثر 20 کاراکتر است')).toBeInTheDocument();
    //     });
    //   })

    // })


    // describe('confirmPassword field validation', () => {

    //   test('displays an error when تکرار رمزعبور field is left empty', () => {
    //     submitForm('تکرار رمزعبور', '')
    //      waitFor(() => {
    //       expect(screen.getByText('فیلد تکرار رمز عبور اجباری است')).toBeInTheDocument();
    //     })
    //   })


    //   test('displays an error when تکرار رمزعبور and رمزعبور is not equal', () => {
        
    //     const { getByLabelText, getByText } = setupCartWith2Items(Checkout)

    //     const passwordinput = getByLabelText('رمزعبور');
    //     fireEvent.change(passwordinput, {
    //       target: { value: '12345' }
    //     })

    //     const comfiredPasswordinput = getByLabelText('تکرار رمزعبور');
    //     fireEvent.change(comfiredPasswordinput, {
    //       target: { value: '1234' }
    //     })

    //     const submitButton = getByText('تایید');
    //     fireEvent.click(submitButton);


    //      waitFor(() => {
    //       expect(screen.getByText('رمزهای عبور مطابقت ندارند')).toBeInTheDocument();
    //     })
    //   })

    //   test('displays an error when تکرار رمزعبور and رمزعبور is equal', () => {
        
    //     const { getByLabelText, getByText } = setupCartWith2Items(Checkout)

    //     const passwordinput = getByLabelText('رمزعبور');
    //     fireEvent.change(passwordinput, {
    //       target: { value: '12345' }
    //     })

    //     const comfiredPasswordinput = getByLabelText('تکرار رمزعبور');
    //     fireEvent.change(comfiredPasswordinput, {
    //       target: { value: '12345' }
    //     })

    //     const submitButton = getByText('تایید');
    //     fireEvent.click(submitButton);


    //      waitFor(() => {
    //       expect(screen.getByText('رمزهای عبور مطابقت ندارند')).not().toBeInTheDocument();
    //     })
    //   })

    // })

  })

})

