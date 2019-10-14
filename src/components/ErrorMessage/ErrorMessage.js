import React from "react";
import style from "./style";

const ErrorMessage = ({ message }) => {
  return message ? (<div css={style}>{message}</div>) : null;
};

export default ErrorMessage;
