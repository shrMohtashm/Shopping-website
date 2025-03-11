import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import Toast from "components/Toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkoutSchema } from "utils/validationSchemas";
import { city_options } from "utils/data";

export default function Checkout() {

  const [toast, setToast] = useState({ type: "info", message: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutSchema),
  });

  const handleSelectChange = (selected) => {
    setValue("city", selected);
  };

  const onSubmit = (data) => {
    setToast({
      type: "success",
      message: `Your user information has been successfully registered`,
    });
    dispatch({ type: "REMOVE_ALL_PRODUCTS" });
    localStorage.removeItem("TotalPrice");
    setTimeout(() => {
      navigate("/");
    }, 3000);
    console.log(data);
  };



  return (
    <>
      <div
        className="row bg-dark"
        style={{ height: "100vh", paddingTop: "45px" }}
      >
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="row bg-light border border-dark border-1">
            <div className="col-md-12 ">
              <h1 className="text-center text-dark py-3 fw-bold">
              Complete Purchase Process
              </h1>
            </div>
            <div className="col-md-12">
              <div className="flex gap-2 container mx-auto justify-center content-center mt-2">
                <div>
                  <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="name" className="mb-1">
                     Name
                    </label>
                    <input
                      id="name"
                      className="w-100 py-2 px-1 mb-1 border border-1"
                      type="text"
                      placeholder="please enter your name"
                      {...register("fullname")}
                    />
                    <span className="fs-6 text-danger p-2 mb-1">
                      {errors.fullname?.message}
                    </span>
                    <br />
                    <label htmlFor="city" className="mb-1">
                     city
                    </label>

                    <Controller
                      name="city"
                      control={control}
                      defaultValue={null}
                      render={({ field }) => (
                        <>
                          <Select
                            {...field}
                            placeholder="Select"
                            onChange={(selectedOption) => {
                              handleSelectChange(selectedOption);
                              field.onChange(selectedOption);
                            }}
                            options={city_options}
                            value={field.value || null}
                            className="mb-1"
                          />
                          {errors.city && (
                            <span className="fs-6 text-danger p-2 mb-1">
                              {errors.city.message}
                            </span>
                          )}
                        </>
                      )}
                    />
                    <br />
                    <label htmlFor="email" className="mb-1">
                      email
                    </label>
                    <input
                      id="email"
                      type="text"
                      className="w-100 py-2 px-1 mt-2 mb-1 border border-1"
                      placeholder="Enter your email"
                      {...register("email")}
                    />
                    <span className="fs-6 text-danger p-2 mb-1">
                      {errors.email?.message}
                    </span>
                    <br />
                    <label htmlFor="password" className="mb-1">
                      password
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="w-100 py-2 px-1 mb-1 border border-1"
                      {...register("password")}
                    />
                    <span className="fs-6 text-danger p-2 mb-1">
                      {errors.password?.message}
                    </span>
                    <br />
                    <label htmlFor="confirmPassword" className="mb-1">
                     confirm password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      placeholder="Enter your confirm password"
                      className="w-100 py-2 px-1 mb-1 border border-1"
                      {...register("confirmPassword")}
                    />
                    <span className="fs-6 text-danger p-2 mb-1">
                      {errors.confirmPassword?.message}
                    </span>
                    <br />
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-5">
                          <button className="btn btn-danger me-1" type="button" onClick={()=>navigate(-1)}>
                            back
                          </button>
                          <input
                            type="submit"
                            value="Confirm"
                            className="btn btn-dark my-2 py-1 px-4 me-3"
                          />

                          <span>
                          Total Price: 
                            {JSON.parse(localStorage.getItem("TotalPrice"))}
                            $
                          </span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toast type={toast.type} message={toast.message} />
    </>
  );
}
