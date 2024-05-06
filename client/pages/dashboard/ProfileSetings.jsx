import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../component/avatar/Avatar";
import { authSelect, setMessageEmty } from "../../features/auth/authSlice";
import useForm from "../../hooks/useForm";
import { uploadProfilePhoto } from "../../features/auth/authApiSlice";
import { useEffect } from "react";
import { createToast } from "../../utils/createToast";

const ProfileSetings = () => {
  const dispatch = useDispatch();

  const { user, error, message, loader } = useSelector(authSelect);

  const { input, handleInputChange, handleInputReset } = useForm({
    name: user.name,
    email: user.email,
    phone: user.phone,
    location: user.location,
    profation: user.profation,
    bio: user.bio,
    bloodGrp: user.bloodGrp,
  });

  const handleProfileUploade = (e) => {
    const profilePhoto = e.target.files[0];

    const form_data = new FormData();

    form_data.append("photo", profilePhoto);

    dispatch(uploadProfilePhoto(form_data));
  };

  useEffect(() => {
    if (message) {
      createToast(message, "success");
      dispatch(setMessageEmty());
    }

    if (error) {
      createToast(error);
      dispatch(setMessageEmty());
    }
  }, [error, message, dispatch]);

  return (
    <>
      {/* Basic Information */}
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Basic Information</h4>
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <div className="change-avatar">
                  <div className="profile-img">
                    <Avatar
                      url={
                        user.photo
                          ? user.photo
                          : "https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png"
                      }
                    />
                  </div>
                  <div className="upload-img">
                    <div className="change-photo-btn">
                      <span>
                        <i className="fa fa-upload" />{" "}
                        {loader ? "Uploading. . ." : "Upload Photo"}
                      </span>
                      <input
                        type="file"
                        className="upload"
                        onChange={handleProfileUploade}
                      />
                    </div>
                    <small className="form-text text-muted">
                      Allowed JPG, GIF or PNG. Max size of 2MB
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="mb-2">
                  Full name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={input.name}
                  name="name"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="mb-2">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  value={input.email}
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="mb-2">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={input.phone}
                  name="phone"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="mb-2">
                  Location <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={input.location}
                  name="location"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="mb-2">
                  Profation <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={input.profation}
                  name="profation"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="mb-2">
                  Bio <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={input.bio}
                  name="bio"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label className="mb-2">Gender</label>
                <select className="form-select form-control">
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="mb-2">Blood Group</label>
                <select className="form-select form-control">
                  <option>Select</option>
                  <option>A+</option>
                  <option>B+</option>
                  <option>O+</option>
                  <option>AB+</option>
                  <option>A-</option>
                  <option>B-</option>
                  <option>O-</option>
                  <option>AB-</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-0">
                <label className="mb-2">Date of Birth</label>
                <input type="text" className="form-control datetimepicker" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /Registrations */}
      <div className="submit-section submit-btn-bottom">
        <button type="submit" className="btn btn-primary prime-btn">
          Save Changes
        </button>
      </div>
    </>
  );
};

export default ProfileSetings;
