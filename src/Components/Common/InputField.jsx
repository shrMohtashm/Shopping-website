import React from "react";

export default function InputField({ id, label, type, register, errors }) {
  return (
    <div className="mb-2">
      <label htmlFor={id} className="mb-1">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={`Enter ${label}`}
        className="w-100 py-2 px-1 mb-1 border border-1"
        {...register(id)}
      />
      {errors && (
        <span className="fs-6 text-danger p-2 mb-1">{errors[id]?.message}</span>
      )}
    </div>
  );
}
