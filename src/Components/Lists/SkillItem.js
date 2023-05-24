import "./SkillItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const SkillItem = (props) => {
  const className = `skill-container ${
    props.skill === "Add new Skill" ? "div-cursor" : null
  }`;
  return (
    <div className={className}>
      {props.skill === "Add new Skill" && (
        <NavLink to="/subbmitForm/addSkill">
          <h3>{props.skill}</h3>
        </NavLink>
      )}
      {props.skill !== "Add new Skill" && <h3>{props.skill}</h3>}
      <FontAwesomeIcon icon={faCode} />
    </div>
  );
};

export default SkillItem;
