import React from 'react';
import { FieldRenderProps } from 'react-final-form';


interface IProps
  extends FieldRenderProps<string, HTMLInputElement> {}

const TextInput: React.FC<IProps> = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error }
}) => {
    
  return (
    <div className="form-input">
      <div className="form-fill">
      <label>{label}</label>
      <input className="input" {...input} placeholder={placeholder} type={type}/>
      </div>
      {touched && error && (<p className="form-validate-error">{error}</p>)}
    </div>
  );
};

export default TextInput;
