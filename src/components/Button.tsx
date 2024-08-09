import React, { useState } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleClick = () => {
    setButtonPressed(!buttonPressed);
  };

  return (
    <>
      {buttonPressed && (
        <div className="alert alert-primary alert-dismissible" role="alert">
          <div>This is an alert!</div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={handleClick}
          ></button>
        </div>
      )}
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
