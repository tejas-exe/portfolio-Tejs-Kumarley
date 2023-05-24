import React from 'react';
import './Error.css';

const ErrorPageAdmin= () => {
  return (
    <div className="error-page">
      <div className="background"></div>
      <div className="content">
        <h1>Oops! Currently only Admin Can Login.</h1>
        <p>apologize for the inconvenience.</p>
      </div>
    </div>
  );
};

export default ErrorPageAdmin;
