import Layouts from "../layouts/Layouts";
import ChangePassword from "../pages/dashboard/ChangePassword";
import Dashboard from "../pages/dashboard/Dashboard";
import MainDashboard from "../pages/dashboard/MainDashboard";
import ProfileSetings from "../pages/dashboard/ProfileSetings";
import PrivateGard from "./PrivateGard";

const privateRoute = [
  {
    element: <PrivateGard />,
    children: [
      {
        element: <Layouts />,
        children: [
          {
            element: <Dashboard />,
            children: [
              {
                path: "dashboard",
                element: <MainDashboard />,
              },
              {
                path: "profile-settings",
                element: <ProfileSetings />,
              },
              {
                path: "change-password",
                element: <ChangePassword />,
              },
            ],
          },
        ],
      },
    ],
  },
];

//Export Default
export default privateRoute;
