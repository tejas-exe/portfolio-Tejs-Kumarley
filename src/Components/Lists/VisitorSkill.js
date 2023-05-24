import Card from "../UiUx/Card";
import "./VisitorSkill.css"
const VisitorSkill = (props) => {
  return (
    <div className="vSkill">
      <h3>{props.skill}</h3>
    </div>
  );
};
export default VisitorSkill;
