import Layouts from "../layouts/Layouts";
import ForgotPassword from "../pages/forgotPassword/ForgotPassword";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import DonorRegister from "../pages/register/DonorRegister";
import Register from "../pages/register/Register";
import PublicGard from "./PublicGard";

const publicRoute = [
  {
    element: <Layouts />,
    children: [
      {
        element: <PublicGard />,
        children: [
          {
            path: "login",
            element: <Login />,
            children: [
              {
                path: "ttt",
                element: "Hello",
              },
            ],
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "donor-register",
            element: <DonorRegister />,
          },
          {
            path: "forgot-password",
            element: <ForgotPassword />,
          },
        ],
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

//Export Default
export default publicRoute;
