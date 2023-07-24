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
import PrivateRoute from "./PrivateRoute";
import CollegeDetails from "../pages/CollegeDetails/CollegeDetails";
import EditProfile from "../pages/EditProfile/EditProfile";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

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
        path: "colleges/:id",
        element: (
          <PrivateRoute>
            <CollegeDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_LINK}/colleges/${params.id}`),
      },
      {
        path: "admission",
        element: <Admission />,
      },
      {
        path: "admission/:collegeId",
        element: (
          <PrivateRoute>
            <ApplyCollege />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_LINK}/college/${params.collegeId}`),
      },
      {
        path: "my-college",
        element: (
          <PrivateRoute>
            <MyCollege />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "user-profile",
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "edit-profile",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
