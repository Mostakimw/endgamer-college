import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UserProfile from "../pages/UserProfile/UserProfile";
import AllColleges from "../pages/Colleges/AllColleges";
import Admission from "../pages/Admission/Admission";
import MyCollege from "../pages/MyCollege/MyCollege";
import ApplyCollege from "../pages/ApplyCollege/ApplyCollege";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "colleges",
        element: <AllColleges />,
      },
      {
        path: "admission",
        element: <Admission />,
      },
      {
        path: "admission/:collegeId",
        element: <ApplyCollege />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/college/${params.collegeId}`),
      },
      {
        path: "my-college",
        element: <MyCollege />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "user-profile",
        element: <UserProfile />,
      },
    ],
  },
]);
