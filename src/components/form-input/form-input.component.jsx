import React from "react";
import "./form-input.styles.scss";

const FormInput = (props) => {
  const { label, inputOptions } = props;
  return (
    <div className="group">
      <input className="form-input" {...inputOptions} />

      {label && (
        <label
          className={`${
            inputOptions.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
