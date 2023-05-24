import { Outlet } from "react-router-dom";
import Header from "../Components/HeadersFooters/Header";
import "../Components/HeadersFooters/Header.css"

const RouterHeader = () => {
  return (
    <div className="max-Width">
      <Header/>
      <Outlet />
    </div>
  );
};

export default RouterHeader;
