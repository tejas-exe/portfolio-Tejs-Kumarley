import { Form } from "react-router-dom";
import { useState } from "react";
import "./newSkill.css";

const SkillForm = () => {
  const [skill, setSkill] = useState("");
  const skillAddHandler = (event) => {
    setSkill(event.target.value);
  };
  return (
    <Form method="post">
      <div className="form-skill" >
        <label htmlFor="myInput">Add your skill:</label>
        <input
          type="text"
          id="myInput"
          placeholder="Enter your skill"
          required
          value={skill}
          onChange={skillAddHandler}
          name="learnedSkill"
        />
      <button type="submit">Submit</button>
      </div>
    </Form>
  );
};

export default SkillForm;
