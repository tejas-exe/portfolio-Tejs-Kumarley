import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./Pages/VisitorHome";
import RouterHeader from "./Pages/RootHeader";
import AdminHome from "./Pages/AdimnHome";
import ModalForm from "./Components/Modal/ModalForm";
import { action as sumitSkillForm } from "./Components/Modal/ModalForm";
import { loder as skillLoder } from "./Components/Lists/listView";
import ErrorPage from "./Pages/Error";
import Auth from "./Components/Modal/authModal";
import { action as authAction } from "./Components/Modal/authModal";
import ErrorPageAdmin from "./Pages/Error copy";
import { authProtection } from "./Util/helperAuth";
import Project from "./Pages/Projects";
import { action as deleteAction } from "./Components/Lists/listView";
import UpdateProject from "./Components/Modal/updateProkectInfo";
import { loader as updateLoder } from "./Components/Modal/updateProkectInfo";
import MyDetails from "./Pages/AboutMe";
import { Suspense } from "react";

const path = createBrowserRouter([
  {
    path: "/",
    element: <RouterHeader />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "projects", element: <Suspense fallback={<p>Loding .....</p>}><Project /></Suspense> },
      {
        path: "/adminPannel",
        element: <AdminHome />,
        loader: skillLoder,
        action: deleteAction,
      },
      {
        path: "/aboutMe",
        element: <MyDetails/>,
      }
    ],
  },
  {
    path: "/subbmitForm/:actionType",
    element: <ModalForm />,
    action: sumitSkillForm,
    loader: authProtection,
  },
  {
    path: "/auth",
    element: <Auth />,
    action: authAction,
    errorElement: <ErrorPageAdmin></ErrorPageAdmin>,
  },
  {
    path: "/updateProject/:projectID",
    element: <UpdateProject />,
    loader: updateLoder,
    action: sumitSkillForm,
  },
]);

function App() {
  return <RouterProvider router={path}></RouterProvider>;
}

export default App;
