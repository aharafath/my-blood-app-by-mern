import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      {/* Page Content */}
      <div className="content top-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Account Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src="https://health.gov.tt/sites/default/files/styles/large/public/inline-images/Blood%20Bank%20logo%202022-03.png?itok=0H-a6QNb"
                      className="img-fluid"
                      alt="Login Banner"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Forgot Password?</h3>
                      <p className="small text-muted">
                        Enter your email to get a password reset link
                      </p>
                    </div>
                    {/* Forgot Password Form */}
                    <form action="login.html">
                      <div className="mb-3 form-focus">
                        <input type="email" className="form-control floating" />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="text-end">
                        <Link className="forgot-link" to="/login">
                          Remember your password?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit"
                      >
                        Reset Password
                      </button>
                    </form>
                    {/* /Forgot Password Form */}
                  </div>
                </div>
              </div>
              {/* /Account Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default ForgotPassword;
