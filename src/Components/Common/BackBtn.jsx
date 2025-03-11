import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackBtn() {
  const navigate = useNavigate();
  return (
    <button
      className="btn btn-danger me-1"
      type="button"
      onClick={() => navigate(-1)}
    >
      back
    </button>
  );
}
