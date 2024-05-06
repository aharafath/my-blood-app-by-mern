import { RouterProvider } from "react-router-dom";
import router from "../routes/route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkUserLogInOrNot } from "../features/auth/authApiSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("loginUser")) {
      dispatch(checkUserLogInOrNot());
    }
  }, [dispatch]);

  return (
    <>
      <ToastContainer
        style={{ zIndex: 99999999 }}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
