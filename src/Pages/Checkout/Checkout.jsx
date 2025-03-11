import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import Toast from "components/Toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkoutSchema } from "utils/validationSchemas";
import { city_options } from "utils/data";
import InputField from "components/Common/InputField";
import BackBtn from "components/Common/BackBtn";
import SubmitBtn from "components/Common/SubmitBtn";

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
      <div className="row bg-dark pt-lg-5 px-2" style={{ minHeight: "100vh" }}>
        <div className="col-lg-8 offset-lg-2">
          <div className="row bg-light border border-dark border-1">
            <div className="col-lg-12 ">
              <h1 className="text-center text-dark py-3 fw-bold">
                Complete Purchase Process
              </h1>
            </div>
            <div className="col-lg-12">
              <div className="flex gap-2 container mx-auto justify-center content-center mt-2">
                <div>
                  <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
                    <InputField
                      id={"fullname"}
                      label={"Name"}
                      type={"text"}
                      register={register}
                      errors={errors}
                    />

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

                    <InputField
                      id={"email"}
                      label={"email"}
                      type={"email"}
                      register={register}
                      errors={errors}
                    />

                    <InputField
                      id={"password"}
                      label={"password"}
                      type={"password"}
                      register={register}
                      errors={errors}
                    />

                    <InputField
                      id={"confirmPassword"}
                      label={"confirm password"}
                      type={"password"}
                      register={register}
                      errors={errors}
                    />

                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-md-6">
                          <span>
                            Total Price:
                            {JSON.parse(localStorage.getItem("TotalPrice"))}$
                          </span>
                        </div>
                        <div className="col-md-6  text-end">
                          <BackBtn />
                          <SubmitBtn />
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
