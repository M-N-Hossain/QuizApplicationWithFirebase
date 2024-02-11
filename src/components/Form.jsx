import React from "react";

import "../styles/form.css";

export default function Form({ children, className, ...rest }) {
  return (
    <form className={`${className} form`} action="#" {...rest}>
      {children}
    </form>
  );
}
