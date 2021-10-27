import React from "react";
import { FieldRenderProps } from "react-final-form";

interface IProps extends FieldRenderProps<number, HTMLInputElement> {}

const NumberInput: React.FC<IProps> = ({
  input,
  label,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <div className="form-input">
      <div className="form-fill">
        <label>{label}</label>
        <input
          className="input"
          {...input}
          placeholder={placeholder}
          type="number"
        />
      </div>
      {touched && error && <p className="form-validate-error">{error}</p>}
    </div>
  );
};

export default NumberInput;
