// src/appRoutes.js
import WelcomePage from "./Pages/WelcomePage"; // Entry page
import Home from "./Member/Components/Home"; // Member home page
import AdminHomePage from "./Admin/Components/AdminHomePage"; // Admin home page
import MemberLogin from "./Member/Components/Login"; // Member login page
import AdminLogin from "./Admin/Components/Login"; // Admin login page
import SignUp from "./Member/Components/Signup"; // Member sign up page
import AdminSignUp from "./Admin/Components/Signup"; // Admin sign up page

const routes = [
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/member/login",
    element: <MemberLogin />,
  },
  {
    path: "/member/signup",
    element: <SignUp />,
  },
  {
    path: "/member/home",
    element: <Home />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin/signup",
    element: <AdminSignUp />,
  },
  {
    path: "/admin/home",
    element: <AdminHomePage />,
  },
];

export default routes;
