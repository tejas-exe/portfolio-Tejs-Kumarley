import React from 'react';
import './Error.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="background"></div>
      <div className="content">
        <h1>Oops! Something went wrong.</h1>
        <p>We apologize for the inconvenience.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
