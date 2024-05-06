import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { checkUserLogInOrNot } from "../features/auth/authApiSlice";

const PublicGard = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (localStorage.getItem("loginUser")) {
    return user ? <Navigate to="/dashboard" /> : <Outlet />;
  } else {
    return <Outlet />;
  }
};

export default PublicGard;
