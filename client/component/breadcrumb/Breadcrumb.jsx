import { Link } from "react-router-dom";

const Breadcrumb = ({ pathname }) => {
  const pathArray = pathname.split("/");
  const title = pathArray.reverse()[0];

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar-two">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">{title}</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/">{title}</Link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
    </>
  );
};

export default Breadcrumb;
