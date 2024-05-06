import headerIcon from "../../src/assets/assets/img/icons/header-icon.svg";
import downArrowImg from "../../src/assets/assets/img/down-arrow-img.png";
import bannerImg from "../../src/assets/assets/img/banner-img.png";
import bannerImg1 from "../../src/assets/assets/img/banner-img1.png";
import bannerImg2 from "../../src/assets/assets/img/banner-img2.png";
import bannerImg3 from "../../src/assets/assets/img/banner-img3.png";
import specialities01 from "../../src/assets/assets/img/specialities/specialities-01.svg";
import specialities02 from "../../src/assets/assets/img/specialities/specialities-02.svg";
import specialities03 from "../../src/assets/assets/img/specialities/specialities-03.svg";
import specialities04 from "../../src/assets/assets/img/specialities/specialities-04.svg";
import specialities05 from "../../src/assets/assets/img/specialities/specialities-05.svg";
import specialities06 from "../../src/assets/assets/img/specialities/specialities-06.svg";

const Home = () => {
  return (
    <>
      {/* Home Banner */}
      <section className="banner-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content aos" data-aos="fade-up">
                <h1>
                  Consult <span>Best Doctors</span> Your Nearby Location.
                </h1>
                <img
                  src={headerIcon}
                  className="header-icon"
                  alt="header-icon"
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <a href="booking.html" className="btn">
                  Start a Consult
                </a>
                <div className="banner-arrow-img">
                  <img
                    src={downArrowImg}
                    className="img-fluid"
                    alt="down-arrow"
                  />
                </div>
              </div>
              <div className="search-box-one aos" data-aos="fade-up">
                <form action="search-2.html">
                  <div className="search-input search-line">
                    <i className="feather-search bficon" />
                    <div className=" mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search doctors, clinics, hospitals, etc"
                      />
                    </div>
                  </div>
                  <div className="search-input search-map-line">
                    <i className="feather-map-pin" />
                    <div className=" mb-0">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Location"
                      />
                      <a
                        className="current-loc-icon current_location"
                        href="javascript:void(0);"
                      >
                        <i className="feather-crosshair" />
                      </a>
                    </div>
                  </div>
                  <div className="search-input search-calendar-line">
                    <i className="feather-calendar" />
                    <div className=" mb-0">
                      <input
                        type="text"
                        className="form-control datetimepicker"
                        placeholder="Date"
                      />
                    </div>
                  </div>
                  <div className="form-search-btn">
                    <button className="btn" type="submit">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img aos" data-aos="fade-up">
                <img
                  src={bannerImg}
                  className="img-fluid"
                  alt="patient-image"
                />
                <div className="banner-img1">
                  <img
                    src={bannerImg1}
                    className="img-fluid"
                    alt="checkup-image"
                  />
                </div>
                <div className="banner-img2">
                  <img
                    src={bannerImg2}
                    className="img-fluid"
                    alt="doctor-slide"
                  />
                </div>
                <div className="banner-img3">
                  <img
                    src={bannerImg3}
                    className="img-fluid"
                    alt="doctors-list"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* Specialities Section */}
      <section className="specialities-section-one">
        <div className="container">
          <div className="row">
            <div className="col-md-6 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title">Specialities</h2>
              </div>
            </div>
            <div className="col-md-6 aos" data-aos="fade-up">
              <div className="owl-nav slide-nav-1 text-end nav-control" />
            </div>
          </div>
          <div
            className="owl-carousel specialities-slider-one owl-theme aos"
            data-aos="fade-up"
          >
            <div className="item">
              <div className="specialities-item">
                <div className="specialities-img">
                  <span>
                    <img src={specialities01} alt="heart-image" />
                  </span>
                </div>
                <p>Cardiology</p>
              </div>
            </div>
            <div className="item">
              <div className="specialities-item">
                <div className="specialities-img">
                  <span>
                    <img src={specialities02} alt="brain-image" />
                  </span>
                </div>
                <p>Neurology</p>
              </div>
            </div>
            <div className="item">
              <div className="specialities-item">
                <div className="specialities-img">
                  <span>
                    <img src={specialities03} alt="kidney-image" />
                  </span>
                </div>
                <p>Urology</p>
              </div>
            </div>
            <div className="item">
              <div className="specialities-item">
                <div className="specialities-img">
                  <span>
                    <img src={specialities04} alt="bone-image" />
                  </span>
                </div>
                <p>Orthopedic</p>
              </div>
            </div>
            <div className="item">
              <div className="specialities-item">
                <div className="specialities-img">
                  <span>
                    <img src={specialities05} alt="dentist" />
                  </span>
                </div>
                <p>Dentist</p>
              </div>
            </div>

            <div className="item">
              <div className="specialities-item">
                <div className="specialities-img">
                  <span>
                    <img src={specialities06} alt="brain-image" />
                  </span>
                </div>
                <p>Neurology</p>
              </div>
            </div>
          </div>
          <div className="specialities-btn aos" data-aos="fade-up">
            <a href="search.html" className="btn">
              See All Specialities
            </a>
          </div>
        </div>
      </section>
      {/* /Specialities Section */}
      {/* Doctors Section */}
      <section className="doctors-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 aos" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title">Best Doctors</h2>
              </div>
            </div>
            <div className="col-md-6 aos" data-aos="fade-up">
              <div className="owl-nav slide-nav-2 text-end nav-control" />
            </div>
          </div>
          <div
            className="owl-carousel doctor-slider-one owl-theme aos"
            data-aos="fade-up"
          >
            {/* Doctor Item */}
            <div className="item">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <a href="doctor-profile.html">
                    <div className="doctor-profile-img">
                      <img
                        src="assets/img/doctors/doctor-03.jpg"
                        className="img-fluid"
                        alt="Ruby Perrin"
                      />
                    </div>
                  </a>
                  <div className="doctor-amount">
                    <span>$ 200</span>
                  </div>
                </div>
                <div className="doc-content">
                  <div className="doc-pro-info">
                    <div className="doc-pro-name">
                      <a href="doctor-profile.html">Dr. Ruby Perrin</a>
                      <p>Cardiology</p>
                    </div>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.5
                        </span>{" "}
                        (35)
                      </p>
                    </div>
                  </div>
                  <div className="doc-pro-location">
                    <p>
                      <i className="feather-map-pin" /> Newyork, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Doctor Item */}
            {/* Doctor Item */}
            <div className="item">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <a href="doctor-profile.html">
                    <div className="doctor-profile-img">
                      <img
                        src="assets/img/doctors/doctor-04.jpg"
                        className="img-fluid"
                        alt="Darren Elder"
                      />
                    </div>
                  </a>
                  <div className="doctor-amount">
                    <span>$ 360</span>
                  </div>
                </div>
                <div className="doc-content">
                  <div className="doc-pro-info">
                    <div className="doc-pro-name">
                      <a href="doctor-profile.html">Dr. Darren Elder</a>
                      <p>Neurology</p>
                    </div>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.0
                        </span>{" "}
                        (20)
                      </p>
                    </div>
                  </div>
                  <div className="doc-pro-location">
                    <p>
                      <i className="feather-map-pin" /> Florida, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Doctor Item */}
            {/* Doctor Item */}
            <div className="item">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <a href="doctor-profile.html">
                    <div className="doctor-profile-img">
                      <img
                        src="assets/img/doctors/doctor-05.jpg"
                        className="img-fluid"
                        alt="Sofia Brient"
                      />
                    </div>
                  </a>
                  <div className="doctor-amount">
                    <span>$ 450</span>
                  </div>
                </div>
                <div className="doc-content">
                  <div className="doc-pro-info">
                    <div className="doc-pro-name">
                      <a href="doctor-profile.html">Dr. Sofia Brient</a>
                      <p>Urology</p>
                    </div>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.5
                        </span>{" "}
                        (30)
                      </p>
                    </div>
                  </div>
                  <div className="doc-pro-location">
                    <p>
                      <i className="feather-map-pin" /> Georgia, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Doctor Item */}
            {/* Doctor Item */}
            <div className="item">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <a href="doctor-profile.html">
                    <div className="doctor-profile-img">
                      <img
                        src="assets/img/doctors/doctor-02.jpg"
                        className="img-fluid"
                        alt="Paul Richard"
                      />
                    </div>
                  </a>
                  <div className="doctor-amount">
                    <span>$ 570</span>
                  </div>
                </div>
                <div className="doc-content">
                  <div className="doc-pro-info">
                    <div className="doc-pro-name">
                      <a href="doctor-profile.html">Dr. Paul Richard</a>
                      <p>Orthopedic</p>
                    </div>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.3
                        </span>{" "}
                        (45)
                      </p>
                    </div>
                  </div>
                  <div className="doc-pro-location">
                    <p>
                      <i className="feather-map-pin" /> Michigan, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Doctor Item */}
            {/* Doctor Item */}
            <div className="item">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <a href="doctor-profile.html">
                    <div className="doctor-profile-img">
                      <img
                        src="assets/img/doctors/doctor-01.jpg"
                        className="img-fluid"
                        alt="John Doe"
                      />
                    </div>
                  </a>
                  <div className="doctor-amount">
                    <span>$ 880</span>
                  </div>
                </div>
                <div className="doc-content">
                  <div className="doc-pro-info">
                    <div className="doc-pro-name">
                      <a href="doctor-profile.html">Dr. John Doe</a>
                      <p>Dentist</p>
                    </div>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star" /> 4.4
                        </span>{" "}
                        (50)
                      </p>
                    </div>
                  </div>
                  <div className="doc-pro-location">
                    <p>
                      <i className="feather-map-pin" /> California, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Doctor Item */}
          </div>
        </div>
      </section>
      {/* /Doctors Section */}
      {/* Pricing */}
      <section className="pricing-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center aos" data-aos="fade-up">
              <div className="section-header-one">
                <h2 className="section-title">Pricing Plan</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-4 col-sm-12 aos" data-aos="fade-up">
              <div className="card pricing-card">
                <div className="card-body">
                  <div className="pricing-header">
                    <div className="pricing-header-info">
                      <div className="pricing-icon">
                        <span>
                          <img
                            src="assets/img/icons/price-icon1.svg"
                            alt="icon"
                          />
                        </span>
                      </div>
                      <div className="pricing-title">
                        <p>For individuals</p>
                        <h4>Basic</h4>
                      </div>
                    </div>
                    <div className="pricing-header-text">
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit,sed do
                        eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div className="pricing-info">
                    <div className="pricing-amount">
                      <h2>
                        $99 <span>/monthly</span>
                      </h2>
                      <h6>What’s included</h6>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>Lorem ipsum dolor amet, consectetur </li>
                        <li>Lorem ipsum amet, consectetur </li>
                        <li>Lorem ipsum dolor amet, consectetur </li>
                        <li>Lorem ipsum amet, consectetur </li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a href="login-email.html" className="btn">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 aos" data-aos="fade-up">
              <div className="card pricing-card pricing-card-active">
                <div className="card-body">
                  <div className="pricing-header">
                    <div className="pricing-header-info">
                      <div className="pricing-icon">
                        <span>
                          <img
                            src="assets/img/icons/price-icon2.svg"
                            alt="icon"
                          />
                        </span>
                      </div>
                      <div className="pricing-title">
                        <p>For startups</p>
                        <h4>Pro</h4>
                      </div>
                      <div className="pricing-tag">
                        <span>Popular</span>
                      </div>
                    </div>
                    <div className="pricing-header-text">
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit,sed do
                        eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div className="pricing-info">
                    <div className="pricing-amount">
                      <h2>
                        $199 <span>/monthly</span>
                      </h2>
                      <h6>What’s included</h6>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>Lorem ipsum dolor amet, consectetur</li>
                        <li>Lorem ipsum amet, consectetur</li>
                        <li>Neque porro quisquam est, qui dolorem</li>
                        <li>Lorem ipsum dolor amet, consectetur</li>
                        <li>Lorem ipsum amet, consectetur</li>
                        <li>Sed ut perspiciatis unde</li>
                        <li>Nemo enim ipsam voluptatem</li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a href="login-email.html" className="btn">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 aos" data-aos="fade-up">
              <div className="card pricing-card">
                <div className="card-body">
                  <div className="pricing-header">
                    <div className="pricing-header-info">
                      <div className="pricing-icon">
                        <span>
                          <img
                            src="assets/img/icons/price-icon3.svg"
                            alt="icon"
                          />
                        </span>
                      </div>
                      <div className="pricing-title">
                        <p>For big companies</p>
                        <h4>Enterprise</h4>
                      </div>
                    </div>
                    <div className="pricing-header-text">
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit,sed do
                        eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div className="pricing-info">
                    <div className="pricing-amount">
                      <h2>
                        $399 <span>/monthly</span>
                      </h2>
                      <h6>What’s included</h6>
                    </div>
                    <div className="pricing-list">
                      <ul>
                        <li>Lorem ipsum dolor amet, consectetur </li>
                        <li>Lorem ipsum amet, consectetur </li>
                        <li>Lorem ipsum dolor amet, consectetur </li>
                        <li>Lorem ipsum amet, consectetur </li>
                      </ul>
                    </div>
                    <div className="pricing-btn">
                      <a href="login-email.html" className="btn">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Pricing */}
      {/* Work Section */}
      <section className="work-section">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-12 work-img-info aos"
              data-aos="fade-up"
            >
              <div className="work-img">
                <img
                  src="assets/img/work-img.png"
                  className="img-fluid"
                  alt="doctor-image"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 work-details">
              <div className="section-header-one aos" data-aos="fade-up">
                <h5>How it Works</h5>
                <h2 className="section-title">
                  4 easy steps to get your solution
                </h2>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <img
                          src="assets/img/icons/work-01.svg"
                          alt="search-doctor-icon"
                        />
                      </span>
                    </div>
                    <div className="work-content">
                      <h5>Search Doctor</h5>
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit, tempor
                        incididunt labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <img
                          src="assets/img/icons/work-02.svg"
                          alt="doctor-profile-icon"
                        />
                      </span>
                    </div>
                    <div className="work-content">
                      <h5>Check Doctor Profile</h5>
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit, tempor
                        incididunt labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <img
                          src="assets/img/icons/work-03.svg"
                          alt="calendar-icon"
                        />
                      </span>
                    </div>
                    <div className="work-content">
                      <h5>Schedule Appointment</h5>
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit, tempor
                        incididunt labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span>
                        <img
                          src="assets/img/icons/work-04.svg"
                          alt="solution-icon"
                        />
                      </span>
                    </div>
                    <div className="work-content">
                      <h5>Get Your Solution</h5>
                      <p>
                        Lorem ipsum dolor consectetur adipiscing elit, tempor
                        incididunt labore dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Work Section */}
    </>
  );
};

export default Home;
