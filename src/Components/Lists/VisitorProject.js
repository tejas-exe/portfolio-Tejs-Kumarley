import "./VisitorProject.css";
const VisitorProject = (props) => {
  return (
    <div className="visitor-project-list">
      <div className="projectInfo-containor">
        <img src={props.image} alt="" className="imgProject" />
        <h1>{props.projectName}</h1>
        <p className="projectDetails">{props.projectDetail}</p>
        <button className="project-visit">
          <a href={props.projectLink} className="nav-Link">
            Visit this site
          </a>
        </button>
      </div>
    </div>
  );
};
export default VisitorProject;
