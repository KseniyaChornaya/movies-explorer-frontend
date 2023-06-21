import React from "react";
import { useFormAndValidation } from "../../utils/hooks/useFormAndValidation";
import Forms from "../Form/Forms";

export default function Login({ handleLogin }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.email || !values.password) return;
    handleLogin(values.email, values.password);
  }

  return (
    <Forms
      handleSubmit={handleSubmit}
      isValid={isValid}
      handleChange={handleChange}
      values={values}
      errors={errors}
    />
  );
}
