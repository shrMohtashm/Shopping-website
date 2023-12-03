import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import Select from 'react-select';
import Toast from '../../Components/Toast/Toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


export default function Checkout() {

  const options = [
    { value: 'آذربایجان شرقی', label: 'آذربایجان شرقی' },
    { value: 'اذربایجان غربی', label: 'اذربایجان غربی' },
    { value: 'اردبیل', label: 'اردبیل' },
    { value: 'اصفهان', label: 'اصفهان' },
    { value: 'البرز', label: 'البرز' },
    { value: 'ایلام', label: 'ایلام' },
    { value: 'بوشهر', label: 'بوشهر' },
    { value: 'تهران', label: 'تهران' },
    { value: 'چهارمحال و بختیاری', label: 'چهارمحال و بختیاری' },
    { value: 'خراسان جنوبی', label: 'خراسان جنوبی' },
    { value: 'راسان رضوی', label: 'راسان رضوی' },
    { value: 'خراسان شمالی', label: 'خراسان شمالی' },
    { value: 'خوزستان', label: 'خوزستان' },
    { value: 'زنجان', label: 'زنجان' },
    { value: 'سمنان', label: 'سمنان' },
    { value: 'سیستان و بلوچستان', label: 'سیستان و بلوچستان' },
    { value: 'قزوین', label: 'قزوین' },
    { value: 'قم', label: 'قم' },
    { value: 'کردستان', label: 'کردستان' },
    { value: 'کرمان', label: 'کرمان' },
    { value: 'کرمانشاه', label: 'کرمانشاه' },
    { value: 'کهگیلویه وبویراحمد', label: 'کهگیلویه وبویراحمد' },
    { value: 'گلستان', label: 'گلستان' },
    { value: 'گیلان', label: 'گیلان' },
    { value: 'مازندران', label: 'مازندران' },
    { value: 'مرکزی', label: 'مرکزی' },
    { value: 'هرمزگان', label: 'هرمزگان' },
    { value: 'همدان', label: 'همدان' },
    { value: 'یزد', label: 'یزد' },
  ];


  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(false)
  const [toast, setToast] = useState({ type: 'info', message: '' })
  const navigate = useNavigate();
  const dispatch=useDispatch()
  

  const schema = yup.object().shape({
    fullname: yup.string().required("فیلد نام اجباری است"),
    email: yup.string().email('ایمیل معتبر وارد کنید').required("فیلد ایمیل اجباری است"),
    password: yup.string().min(4, 'پسورد حداقل 4 کاراکتر است').max(20, 'پسورد حداکثر 20 کاراکتر است').required("فیلد پسورد اجباری است"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "رمزهای عبور مطابقت ندارند")
      .required('فیلد اجباری است'),
  })


  const { register, handleSubmit, setValue, formState: { errors }, } = useForm({
    resolver: yupResolver(schema),
  });


  const handleSelectChange = (selected) => {
    setSelectedOption(selected);
    setValue('city', selected);

  };

  const onSubmit = (data) => {
    console.log(selectedOption)
    if (!selectedOption) {
      setError(true)
    }
    else {
      setError(false)
      data.city = selectedOption;
      setToast({ type: "success", message: `اطلاعات کاربری شما با موفقیت ثبت شد` });
      dispatch({
        type: 'REMOVE_ALL_PRODUCTS'
      })
      localStorage.removeItem('TotalPrice')
      setTimeout(() => {
        navigate('/');
      }, 3000);
      console.log(data);
    }
  };

  useEffect(() => {
    setToast({ type: "warning", message: `مهلت تکمیل خرید 15 دقیقه است` });
    const timeoutId = setTimeout(() => {
      navigate('/');
    }, 900000)

    return () => clearTimeout(timeoutId);
  }, [navigate])


  return (
    <>
      <div className='row bg-dark' style={{ height: '100vh', paddingTop: '45px' }}>
        <div className='col-md-2'></div>
        <div className='col-md-8'>
          <div className='row bg-light border border-dark border-1'>
            <div className='col-md-12 '>
              <h1 className='text-center text-dark py-3 fw-bold'>تکمیل فرایند خرید</h1>
            </div>
            <div className='col-md-12'>
              <div className="flex gap-2 container mx-auto justify-center content-center mt-2">
                <div>
                  <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='name' className='mb-1'>نام و نام خانوادگی</label>
                    <input
                      id='name'
                      className='w-100 py-2 px-1 mb-1 border border-1'
                      type="text"
                      placeholder="نام خود را وارد کنید"
                      {...register("fullname")}
                    />
                    <span className='fs-6 text-danger p-2 mb-1'>{errors.fullname?.message}</span>
                    <br />
                    <label htmlFor='city' className='mb-1'> استان </label>
                    <Select
                      id='city'
                      placeholder='انتخاب کنید'
                      defaultValue={selectedOption}
                      onChange={handleSelectChange}
                      options={options}
                      name="city"
                      className='mb-1'
                    />
                    {error &&
                      <span className='fs-6 text-danger p-2 mb-1'>شهر خود را وارد کنید</span>
                    }
                    <br />
                    <label htmlFor='email' className='mb-1'>ایمیل</label>
                    <input
                      id='email'
                      type="text"
                      className='w-100 py-2 px-1 mt-2 mb-1 border border-1'
                      placeholder="ایمیل را وارد کنید"
                      {...register("email")}
                    />
                    <span className='fs-6 text-danger p-2 mb-1'>{errors.email?.message}</span>
                    <br />
                    <label htmlFor='password' className='mb-1'>رمزعبور</label>
                    <input
                      id='password'
                      type="password"
                      placeholder="رمز عبور را وارد کنید"
                      className='w-100 py-2 px-1 mb-1 border border-1'
                      {...register("password")}
                    />
                    <span className='fs-6 text-danger p-2 mb-1'>{errors.password?.message}</span>
                    <br />
                    <label htmlFor='confirmPassword' className='mb-1'>تکرار رمزعبور</label>
                    <input
                      id='confirmPassword'
                      type="password"
                      placeholder="رمزعبور را دوباره وارد کنید"
                      className='w-100 py-2 px-1 mb-1 border border-1'
                      {...register("confirmPassword")}
                    />
                    <span className='fs-6 text-danger p-2 mb-1'>  {errors.confirmPassword?.message} </span>
                    <br />

                    <input
                      type="submit"
                      value='تایید'
                      className="btn btn-dark my-2 py-1 ms-3"
                    />
                    <span>مبلغ پرداختی:
                      $
                      {
                        JSON.parse(localStorage.getItem('TotalPrice'))

                      }
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toast type={toast.type} message={toast.message} />
    </>
  )
}

