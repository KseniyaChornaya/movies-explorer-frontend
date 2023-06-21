import React from "react";
import Forms from "../Form/Forms";
import { useFormAndValidation } from "../../utils/hooks/useFormAndValidation";

export default function Register({ handleRegistration }) {
  const { values, handleChange, errors, isValid } = useFormAndValidation({});
  function handleSubmit(evt) {
    evt.preventDefault();
    const { name, email, password } = values;
    handleRegistration(name, email, password);
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
