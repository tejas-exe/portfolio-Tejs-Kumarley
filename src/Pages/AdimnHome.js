import ProjectList from "../Components/Lists/listView";
import "./AdimnHome.css";

const AdminHome = () => {
  return (
    <div className="admin-pannel">
      <h1 style={{ marginLeft: "30px", alignSelf: "flex-start" }}>
        Admin home page
      </h1>
      <ProjectList></ProjectList>
    </div>
  );
};

export default AdminHome;
