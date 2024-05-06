import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authSelect, setMessageEmty } from "../../features/auth/authSlice";
import useForm from "../../hooks/useForm";
import { userLogin } from "../../features/auth/authApiSlice";
import { useEffect } from "react";
import { createToast } from "../../utils/createToast";

const Login = () => {
  //Initial Use Dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, message, loader } = useSelector(authSelect);

  // Use Form Hook

  const { input, handleInputChange, handleInputReset } = useForm({
    auth: "",
    password: "",
  });

  //Handel Input Submit
  const handleInputSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin(input));
  };

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmty());
      handleInputReset();
      navigate("/dashboard");
    }

    if (error) {
      createToast(error);
      dispatch(setMessageEmty());
    }
  }, [error, message, dispatch]);

  return (
    <>
      {/* Page Content */}
      <div className="content top-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Login Tab Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src="https://health.gov.tt/sites/default/files/styles/large/public/inline-images/Blood%20Bank%20logo%202022-03.png?itok=0H-a6QNb"
                      className="img-fluid"
                      alt="Doccure Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>Doccure</span>
                      </h3>
                    </div>
                    <form onSubmit={handleInputSubmit}>
                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          name="auth"
                          value={input.auth}
                          onChange={handleInputChange}
                          className="form-control floating"
                        />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="mb-3 form-focus">
                        <input
                          type="password"
                          name="password"
                          value={input.password}
                          onChange={handleInputChange}
                          className="form-control floating"
                        />
                        <label className="focus-label">Password</label>
                      </div>
                      <div className="text-end">
                        <Link className="forgot-link" to="/forgot-password">
                          Forgot Password ?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit"
                      >
                        Login
                      </button>
                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>
                      <div className="row social-login">
                        <div className="col-6">
                          <a href="#" className="btn btn-facebook w-100">
                            <i className="fab fa-facebook-f me-1" /> Login
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="#" className="btn btn-google w-100">
                            <i className="fab fa-google me-1" /> Login
                          </a>
                        </div>
                      </div>
                      <div className="text-center dont-have">
                        Don’t have an account?{" "}
                        <Link to="/register">Register</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* /Login Tab Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default Login;
