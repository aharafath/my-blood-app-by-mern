import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import { authSelect, setMessageEmty } from "../../features/auth/authSlice";
import { passwordChange } from "../../features/auth/authApiSlice";
import { createToast } from "../../utils/createToast";
import { useEffect } from "react";

const ChangePassword = () => {
  const dispatch = useDispatch();

  const { error, message, loader } = useSelector(authSelect);

  const { input, handleInputChange, handleInputReset } = useForm({
    oldPass: "",
    newPass: "",
    confirmPass: "",
  });

  //Handel Input Submit
  const handleInputSubmit = (e) => {
    e.preventDefault();
    dispatch(passwordChange(input));
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
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              {/* Change Password Form */}
              <form onSubmit={handleInputSubmit}>
                <div className="mb-3">
                  <label className="mb-2">Old Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={handleInputChange}
                    value={input.oldPass}
                    name="oldPass"
                  />
                </div>
                <div className="mb-3">
                  <label className="mb-2">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={handleInputChange}
                    value={input.newPass}
                    name="newPass"
                  />
                </div>
                <div className="mb-3">
                  <label className="mb-2">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={handleInputChange}
                    value={input.confirmPass}
                    name="confirmPass"
                  />
                </div>
                <div className="submit-section">
                  <button type="submit" className="btn btn-primary submit-btn">
                    Save Changes
                  </button>
                </div>
              </form>
              {/* /Change Password Form */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
