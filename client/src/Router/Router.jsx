import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import Jobsdetails from "../Pages/Jobsdetail/Jobsdetails";
import Registercompany from "../Pages/Registercompany/Registercompany";
import Memberlogin from "../Pages/Members/Memberlogin";
import Newprofile from "../Pages/Profilebuilder/Newprofile";
import UserRegister from "../Pages/Users/UserRegister";
import Resume from "../Pages/Resume/Resume";
import UserLogin from "../Pages/Users/Userlogin";
import Usermain from "../Pages/Users/Usermain";
import Admin from '../AdminRoutes'
import Dashboardmain from "../Pages/Admin/Dashboard/Dashboardmain";


// import About from "../Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post-job", element: <CreateJob /> },
      { path: "/Job-details/:id", element: <Jobsdetails /> },
      { path: "/register-company", element: <Registercompany /> },
      { path: "/member-login", element: <Memberlogin /> },
      { path: "/new_profile_builder", element: <Newprofile /> },
      { path: "/sign-up", element: <UserRegister /> },
      { path: "/Resume", element: <Resume /> },
      { path: "/login", element: <UserLogin /> },
      { path: "/users", element: <Usermain /> },
    ],
  },
  {
    path: "/admin-panel",
    element: <Admin/>,
    children: [
      { index: true, element: <Dashboardmain/> },
      { path: "add-case", element: <UserRegister/> },
    ]
  },
]);

export default router;

