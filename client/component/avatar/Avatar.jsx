import avatar from "../../src/assets/assets/img/patients/patient.jpg";

const Avatar = ({ url }) => {
  return (
    <>
      <img className="rounded-circle" src={url ? url : avatar} alt="" />
    </>
  );
};

export default Avatar;
