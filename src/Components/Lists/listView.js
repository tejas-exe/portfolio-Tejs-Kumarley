import Card from "../UiUx/Card";
import SkillItem from "./SkillItem";
import ListTtem from "./listItem";
import "./listView.css";
import { useLoaderData } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { defer, Await, redirect } from "react-router-dom";
import { Suspense } from "react";
import MyDetails from "../UiUx/MyDetails";

const whiteScren =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX++u/GxpXeAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=";

const ProjectList = () => {
  const loder = useLoaderData();
  let loding = useNavigation();
  return (
    <>
      <Card>
        <ListTtem
          key="add project"
          projectName="Add New Project"
          image={whiteScren}
        />
        <Suspense fallback={<p>Lodading.....</p>}>
          <Await resolve={loder.projectList}>
            {(lodedProject) =>
              lodedProject &&
              lodedProject.map((item) => (
                <ListTtem
                  id={item.id}
                  key={item.id}
                  projectName={item.projectName}
                  image={item.image}
                />
              ))
            }
          </Await>
        </Suspense>
      </Card>
      <Card className="card-coustom">
        <SkillItem key="AddSkills" skill="Add new Skill" />
        {loding.state === "loading" && <h1>loding.....</h1>}
        <Suspense fallback={<p>Lodading.....</p>}>
          <Await resolve={loder.skillSet}>
            {(loadedSkill) =>
              loadedSkill.map((item) => (
                <SkillItem key={item.id} skill={item.skill} />
              ))
            }
          </Await>
        </Suspense>
      </Card>
      {/* <Card className="card-coustomDetail">
        <MyDetails />
      </Card> */}
    </>
  );
};

export default ProjectList;

const fechSkills = async () => {
  const responce = await fetch(
    "https://portfolio-b117d-default-rtdb.firebaseio.com/learnedSkill.json"
  );
  let res = await responce.json();
  if (!res) {
    return [];
  } else {
    res = Object.entries(res).map((item) => ({
      id: item[0],
      skill: item[1].skill,
    }));
    return res;
  }
};

const fechProjects = async () => {
  const responce = await fetch(
    "https://portfolio-b117d-default-rtdb.firebaseio.com/project.json"
  );
  let res = await responce.json();

  if (!res) {
    return [];
  } else {
    res = Object.entries(res).map((item) => ({
      id: item[0],
      image: item[1].image,
      project: item[1].project,
    }));
    // console.log("====>", res);
    return res;
  }
};

export const loder = async () => {
  const token = localStorage.getItem("authToken");
  if (token !== "-NVyg7gFEEXA-lCYtCVz" || !token) {
    // console.log("inside");
    return redirect("/auth?mode=Login");
  } else {
    return defer({
      auth: null,
      skillSet: fechSkills(),
      projectList: fechProjects(),
    });
  }
};

export const action = async (body) => {
  
  let id = await body.request.formData();
  let del = id.get("id");
  const responce = await fetch(
    `https://portfolio-b117d-default-rtdb.firebaseio.com/project/${del}.json`,
    {
      method: "DELETE",
    }
  );
  const res = await responce.json();
  return redirect("/adminPannel");
};
