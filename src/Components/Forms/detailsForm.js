import { Form } from "react-router-dom";
import "./detailsForm.css"
import { useState } from "react";
const DetailForm = () => {
  return (
    <>
      <form className="form-myDetails">
        <h1>My Details</h1>
        <label htmlFor="myDetails-o">Enter / update your details here in one line</label>
        <input type="text" htmlFor="myDetails-o" className="myDetails-o" style={{width:"618px",maxWidth:"618px"}}/>
        <label htmlFor="myDetails"> Enter / update your details here </label>
        <textarea id="myDetails" name="myDetails" rows="8" cols="84" className="no-resize ">
          At w3schools.com you will learn how to make a website. They offer free
          tutorials in all web development technologies.
        </textarea>
        <button>Update details</button>
      </form>
    </>
  );
};

export default DetailForm;
