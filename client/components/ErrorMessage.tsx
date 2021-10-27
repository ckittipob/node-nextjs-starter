import React from 'react';


interface IProps {
  error: any;
  text?: string;
}

const ErrorMessage: React.FC<IProps> = ({ error, text }) => {

  const errors = error.errors;
  return (
    <div className="form-error">
      <h3 className="form-error-topic">{text}</h3>
      {errors.map((e:any, i: number) => (
        <p className="form-error-message" key={i}>{e.msg}</p>
      ))}
    </div>
  );
};

export default ErrorMessage;
