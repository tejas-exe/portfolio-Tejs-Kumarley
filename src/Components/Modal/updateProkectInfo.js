import AddNewProject from "../Forms/newProject";
import ModelOverlay from "./Model";
import { useLoaderData } from "react-router-dom";

const UpdateProject = () => {
  const data = useLoaderData();
  return (
    <>
      <ModelOverlay>
        <AddNewProject
          projectName={data.project}
          projectImage={data.image}
          projectLink={data.projectLink}
          projectDetail={data.projectDetail}
        />
      </ModelOverlay>
    </>
  );
};
export default UpdateProject;

export const loader = async ({ request, params }) => {
  // console.log("---------------<><>", params);
  const responce = await fetch(
    `https://portfolio-b117d-default-rtdb.firebaseio.com/project/${params.projectID}.json`
  );
  const res = await responce.json();

  return res;
};
