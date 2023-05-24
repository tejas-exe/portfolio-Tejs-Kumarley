import "./Project.css";
import useHttp from "../Hooks/useHttp";
import VisitorProject from "../Components/Lists/VisitorProject";
import { useEffect, useState } from "react";
import Loding from "../Components/UiUx/Loging";
const Project = () => {
  const [project, setProject] = useState([]);
  let config = {
    URL: "https://portfolio-b117d-default-rtdb.firebaseio.com/project.json",
    metaData: { method: "GET" },
  };
  const projectData = (task) => {
    let res = Object.entries(task).map((item) => ({
      id: item[0],
      image: item[1].image,
      project: item[1].project,
      projectLink: item[1].projectLink,
      projectDetail: item[1].projectDetail,
    }));
    setProject(res);
  };
  const projList = useHttp(config, projectData);
  const { isLoding, error, responce: getProjectList } = projList;

  // console.log("------------->>>", project);
  useEffect(() => {
    getProjectList();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent:"center",
        width:"100%"
      }}
    >
      {isLoding && <Loding></Loding>}
      <div className="project-elements">
        {project.map((item) => (
          <VisitorProject
            key={item.id}
            image={item.image}
            projectName={item.project}
            projectDetail={item.projectDetail}
            projectLink={item.projectLink}
          />
        ))}
      </div>
    </div>
  );
};
export default Project;

// projectLink={data.projectLink}
// projectDetail={data.projectDetail}
