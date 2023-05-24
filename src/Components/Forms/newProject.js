import { useState } from "react";
import { Form, useSubmit, useParams } from "react-router-dom";
import "./newProject.css";

const AddNewProject = (props) => {
  const submit = useSubmit();
  const params = useParams();
  const [base64Data, setBase64Data] = useState(props.projectImage);
  const [project, setProject] = useState(props.projectName);
  const [projectDetail, setProjectDetails] = useState(props.projectDetail);
  const [projectLink, setProjectLink] = useState(props.projectLink);

  const uploadImageHandler = (event) => {
    const File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(File);
    reader.onload = () => {
      setBase64Data(reader.result);
    };
    reader.onerror = (error) => {
      console.error("Error converting file to base64:", error);
    };
  };


  const addNewProjectHandler = (event) => {
    event.preventDefault();
    if (params.actiontype) {
      submit(
        {
          imageBase64: base64Data,
          addProject: project,
          projectDetail: projectDetail,
          projectLink: projectLink,
        },
        { method: "POST" }
      );
    } else {
      submit(
        {
          imageBase64: base64Data,
          addProject: project,
          projectDetail: projectDetail,
          projectLink: projectLink,
          projectID: params.projectID,
        },
        { method: "PATCH" }
      );
    }
  };

  const projectNameHandler = (event) => {
    setProject(event.target.value);
  };

  const addProjectDetailsHandler = (event) => {
    setProjectDetails(event.target.value);
  };

  const addProjectLinkHandler = (event) => {
    setProjectLink(event.target.value);
  };

  return (
    <form onSubmit={addNewProjectHandler}>
      <div className="new-project">
        <label htmlFor="projectName">Add new project name</label>
        <input
          type="text"
          id="projectName"
          placeholder="Enter New Project"
          required
          onChange={projectNameHandler}
          name="addProject"
          defaultValue={props.projectName ? props.projectName : ""}
        />
        <label htmlFor="projectDetails">Project Details</label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          rows="8"
          cols="70"
          className="no-resize "
          placeholder="Add Project Handler"
          defaultValue={props.projectDetail ? props.projectDetail : ""}
          onChange={addProjectDetailsHandler}
        />
        <label htmlFor="projectLink">Add new project Link</label>
        <input
          type="text"
          id="projectLink"
          placeholder="Enter New Project Link"
          required
          onChange={addProjectLinkHandler}
          name="projectLink"
          defaultValue={props.projectLink ? props.projectLink : ""}
        />
        <input
          type="file"
          name="myImage"
          onChange={uploadImageHandler}
          style={{
            backgroundColor: "#f0f0f0",
            color: "#333",
            padding: "8px 16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            cursor: "pointer",
            marginBottom: "8px",
            width: "78%",
            margin: "10px",
          }}
        />
        {base64Data && (
          <img
            src={base64Data ? base64Data : ""}
            alt=""
            className="imge-preview"
          />
        )}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default AddNewProject;
