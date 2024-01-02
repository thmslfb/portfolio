import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const buttonTypes = {
    PRIMARY: "PRIMARY",
    SECONDARY: "SECONDARY",
  };

  const { type, buttonText } = props;

  Button.propTypes = {
    type: PropTypes.oneOf(Object.values(buttonTypes)),
    buttonText: PropTypes.string.isRequired,
  };

  return (
    <button
      className={`${
        type === buttonTypes.PRIMARY
          ? "bg-emerald-500 hover:bg-emerald-600 text-black"
          : buttonTypes.SECONDARY
          ? "border border-neutral-700 hover:border-neutral-400"
          : ""
      } flex justify-center items-center py-2 px-3 rounded-md`}>
      {buttonText}
    </button>
  );
};

export default Button;
