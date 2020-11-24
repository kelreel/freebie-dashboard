import React from "react";
import "./AddPersonForm.scss";
import { useForm } from "react-hook-form";

interface IFormInput {
  owner: string;
  date: string;
  profit: number;
  losses: number;
  phone: string;
}

// eslint-disable-next-line no-useless-escape
const phoneRegex = /^((\+7|7|8)+([0-9]){10})$/i;

export default function AddPersonForm() {
  const { register, formState, handleSubmit, errors } = useForm<IFormInput>({
    mode: "onBlur",
    defaultValues: {
      owner: "First Last",
      date: new Date().toISOString().substring(0, 10),
      profit: 567.89,
      losses: 123.45,
      phone: "+79100000000",
    },
  });

  const onSubmit = (data: IFormInput) => console.log(data);

  return (
    <form className="person-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__item">
        <label>Owner</label>
        <input
          name="owner"
          type="text"
          placeholder="name"
          ref={register({ required: true, minLength: 4 })}
        />
        {errors.owner?.type === "required" && (
          <span className="error">This field is required</span>
        )}
        {errors.owner?.type === "minLength" && (
          <span className="error">Minimum length: 4</span>
        )}
      </div>
      <div className="form__item">
        <label>Date</label>
        <input
          name="date"
          type="date"
          placeholder="12/05/05"
          ref={register({ required: true })}
        />
        {errors.date?.type === "required" && (
          <span className="error">This field is required</span>
        )}
      </div>
      <div className="form__item">
        <label>Profit</label>
        <input
          name="profit"
          type="number"
          placeholder="155.87"
          step="0.01"
          ref={register({ required: true, min: 0 })}
        />
        {errors.profit?.type === "required" && (
          <span className="error">This field is required</span>
        )}
        {errors.profit?.type === "min" && (
          <span className="error">Minimal value: 0</span>
        )}
      </div>
      <div className="form__item">
        <label>Losses</label>
        <input
          name="losses"
          type="number"
          placeholder="12.32"
          step="0.01"
          ref={register({ required: true, min: 0 })}
        />
        {errors.losses?.type === "required" && (
          <span className="error">This field is required</span>
        )}
        {errors.losses?.type === "min" && (
          <span className="error">Minimal value: 0</span>
        )}
      </div>
      <div className="form__item">
        <label>Phone</label>
        <input
          name="phone"
          type="text"
          placeholder="+7-900-123-32-10"
          ref={register({ required: true, pattern: phoneRegex })}
        />
        {errors.phone?.type === "required" && (
          <span className="error">This field is required</span>
        )}
        {(errors.phone?.type === "pattern") && (
          <span className="error">Incorrect phone number</span>
        )}
      </div>

      <button
        className="btn button--primary"
        type="submit"
        disabled={!formState.isValid}
      >
        Create
      </button>
    </form>
  );
}
