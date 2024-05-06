import Avatar from "../../component/avatar/Avatar";
import { Link, Outlet } from "react-router-dom";
import ptDashboard01 from "../../src/assets/assets/img/specialities/pt-dashboard-01.png";
import ptDashboard02 from "../../src/assets/assets/img/specialities/pt-dashboard-02.png";
import ptDashboard03 from "../../src/assets/assets/img/specialities/pt-dashboard-03.png";
import ptDashboard04 from "../../src/assets/assets/img/specialities/pt-dashboard-04.png";
import { useDispatch, useSelector } from "react-redux";
import { userLogOut } from "../../features/auth/authApiSlice";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogOutUser = () => {
    dispatch(userLogOut());
  };

  return (
    <>
      {/* Page Content */}

      <div className="content">
        <div className="container">
          <div className="row">
            {/* Profile Sidebar */}
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <Link to="/dashboard" className="booking-doc-img">
                      <Avatar
                        url={
                          user.photo
                            ? user.photo
                            : "https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png"
                        }
                      />
                    </Link>
                    <div className="profile-det-info">
                      <h3>{user.name}</h3>
                      <div className="patient-details">
                        <h5>
                          <i className="fas fa-birthday-cake" /> 24 Jul 1983, 38
                          years
                        </h5>
                        {user.location && (
                          <h5 className="mb-0">
                            <i className="fas fa-map-marker-alt" />{" "}
                            {user.location}
                          </h5>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li className="active">
                        <a href="patient-dashboard.html">
                          <i className="fas fa-columns" />
                          <span>Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="favourites.html">
                          <i className="fas fa-bookmark" />
                          <span>Favourites</span>
                        </a>
                      </li>

                      <li>
                        <a href="chat.html">
                          <i className="fas fa-comments" />
                          <span>Message</span>
                          <small className="unread-msg">23</small>
                        </a>
                      </li>

                      <li>
                        <Link to="/profile-settings">
                          <i className="fas fa-user-cog" />
                          <span>Profile Settings</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/change-password">
                          <i className="fas fa-lock" />
                          <span>Change Password</span>
                        </Link>
                      </li>
                      <li>
                        <a href="#" onClick={handleLogOutUser}>
                          <i className="fas fa-sign-out-alt" />
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* / Profile Sidebar */}
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <img src={ptDashboard01} alt="heart-image" width={55} />
                      </div>
                      <h5>Heart Rate</h5>
                      <h6>
                        12 <sub>bpm</sub>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <img
                          src={ptDashboard02}
                          alt="thermometer-image"
                          width={55}
                        />
                      </div>
                      <h5>Body Temperature</h5>
                      <h6>
                        18 <sub>C</sub>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <img
                          src={ptDashboard03}
                          alt="hospital-equipment"
                          width={55}
                        />
                      </div>
                      <h5>Glucose Level</h5>
                      <h6>70 - 90</h6>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 col-xl-3 patient-dashboard-top">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="mb-3">
                        <img
                          src={ptDashboard04}
                          alt="hospital-equipment"
                          width={55}
                        />
                      </div>
                      <h5>Blood Pressure</h5>
                      <h6>
                        202/90 <sub>mg/dl</sub>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};

export default Dashboard;
