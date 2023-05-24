import "./listItem.css";
import { NavLink, useSubmit } from "react-router-dom";
const ListTtem = (props) => {
  const act = useSubmit();
  const deleteBtnHandler = () => {
    act({ id: props.id }, { method: "DELETE" });
  };
  return (
    <div className="list-item">
      <div className="image-container">
        <img src={props.image} alt="Project img" className="img-pix" />
      </div>
      {props.projectName !== "Add New Project" && (
        <div>
          <button className="deleteButton" onClick={deleteBtnHandler}>
            Delete
          </button>
          <NavLink to={"/updateProject/"+ props.id}>
            <button className="updateButton">Update </button>
          </NavLink>

          <h3 className="project-name">{props.projectName}</h3>
        </div>
      )}
      {props.projectName === "Add New Project" && (
        <NavLink className="project-name" to="/subbmitForm/addProject">
          <h3>{props.projectName}</h3>
        </NavLink>
      )}
    </div>
  );
};

export default ListTtem;
