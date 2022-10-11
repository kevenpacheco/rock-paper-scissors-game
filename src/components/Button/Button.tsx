import classNames from "classnames";
import { HTMLAttributes } from "react";
import "./Button.scss";

interface ButtonI extends HTMLAttributes<HTMLButtonElement> {
  variant?: 'secondary';
}

export const Button = ({variant, children, ...rest}: ButtonI) => {
  return (
    <button
      type="button"
      className={classNames("Button", { "Button--secondary": variant })}
      {...rest}
    >
      {children}
    </button>
  );
};
