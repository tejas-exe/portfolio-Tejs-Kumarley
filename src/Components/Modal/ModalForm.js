import ModelOverlay from "./Model";
import "./ModalForm.css";
import { redirect, useParams } from "react-router-dom";
import SkillForm from "../Forms/newSkill";
import AddNewProject from "../Forms/newProject";
import DetailForm from "../Forms/detailsForm";

const ModalForm = () => {
  const params = useParams();
  let paramsAction = params.actionType;

  return (
    <ModelOverlay>
      {paramsAction === "addSkill" && <SkillForm />}
      {paramsAction === "addProject" && <AddNewProject />}
      {paramsAction === "updateDetails" && <DetailForm />}
    </ModelOverlay>
  );
};

export default ModalForm;

export async function action(body) {
  // console.log("------<><><>", body.request.method);
  // console.log("------<><><>>", body.request);

  const data = await body.request.formData();
  let config;
  if (body.params.actionType === "addSkill") {
    config = {
      storagePath: "learnedSkill.json",
      reqBody: {
        skill: data.get("learnedSkill"),
      },
    };
  }
  if (body.params.actionType === "addProject") {
    config = {
      storagePath: "project.json",
      reqBody: {
        project: data.get("addProject"),
        image: data.get("imageBase64"),
        projectDetail: data.get("projectDetail"),
        projectLink: data.get("projectLink"),
      },
    };
  }
  if (body.request.method === "PATCH") {
    config = {
      storagePath: `project/${data.get("projectID")}.json`,
      reqBody: {
        project: data.get("addProject"),
        image: data.get("imageBase64"),
        projectDetail: data.get("projectDetail"),
        projectLink: data.get("projectLink"),
      },
    };
  }

  const request = await fetch(
    `https://portfolio-b117d-default-rtdb.firebaseio.com/${config.storagePath}`,
    {
      method: body.request.method,
      body: JSON.stringify(config.reqBody),
    }
  );
  // console.log("<---->>><<<", request);
  return redirect("/adminPannel");
}