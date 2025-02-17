import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import { donorRegister } from "../../features/auth/authApiSlice";
import { createToast } from "../../utils/createToast";
import { useEffect } from "react";
import { authSelect, setMessageEmty } from "../../features/auth/authSlice";

const DonorRegister = () => {
  //Initial Use Dispatch
  const dispatch = useDispatch();

  const { error, message, loader } = useSelector(authSelect);

  // Use Form Hook

  const { input, handleInputChange, handleInputReset } = useForm({
    name: "",
    auth: "",
    password: "",
    role: "donor",
  });

  //Handel Input Submit
  const handleInputSubmit = (e) => {
    e.preventDefault();
    dispatch(donorRegister(input));
  };

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmty());
      handleInputReset();
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
              {/* Register Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src="https://health.gov.tt/sites/default/files/styles/large/public/inline-images/Blood%20Bank%20logo%202022-03.png?itok=0H-a6QNb"
                      className="img-fluid"
                      alt="Doccure Register"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Donor Register{" "}
                        <Link to="/register">Are you a Patient?</Link>
                      </h3>
                    </div>
                    {/* Register Form */}
                    <form onSubmit={handleInputSubmit}>
                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          name="name"
                          value={input.name}
                          onChange={handleInputChange}
                          className="form-control floating"
                        />
                        <label className="focus-label">Name</label>
                      </div>
                      <div className="mb-3 form-focus">
                        <input
                          type="text"
                          name="auth"
                          value={input.auth}
                          onChange={handleInputChange}
                          className="form-control floating"
                        />
                        <label className="focus-label">Mobile Number</label>
                      </div>
                      <div className="mb-3 form-focus">
                        <input
                          type="password"
                          name="password"
                          value={input.password}
                          onChange={handleInputChange}
                          className="form-control floating"
                        />
                        <label className="focus-label">Create Password</label>
                      </div>
                      <div className="text-end">
                        <Link className="forgot-link" to="/login">
                          Already have an account?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit"
                      >
                        {loader ? "Creating..." : "Signup"}
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
                    </form>
                    {/* /Register Form */}
                  </div>
                </div>
              </div>
              {/* /Register Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default DonorRegister;
