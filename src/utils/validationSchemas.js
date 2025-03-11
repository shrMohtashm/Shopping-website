import * as yup from "yup";

export const checkoutSchema = yup.object().shape({
    fullname: yup.string().required("Name field is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email field is required"),
    password: yup
      .string()
      .required("Password field is required")
      .min(4, "Password must be at least 4 characters")
      .max(20, "Password must be at most 20 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm password field is required")
      .oneOf([yup.ref("password"), null], "Passwords do not match"),
    city: yup
      .object()
      .shape({
        value: yup.string().required("city "),
        label: yup.string().required("enter"),
      })
      .required("select your city"),
  });
