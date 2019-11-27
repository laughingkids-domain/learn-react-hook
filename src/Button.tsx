import React, { useState, useCallback } from "react";

const randomColor = () => "#" + ((Math.random() * 0xffffff) << 0).toString(16);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.memo((props: ButtonProps) => (
  <button onClick={props.onClick} style={{ background: randomColor() }}>
    {props.children}
  </button>
));

export default Button;
