import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AboutUs() {
  const navigate = useNavigate();

  const doAndGoToHome = () => {
    console.log("Do something....");
    navigate("/home");
  };
  return (
    <>
      <div>AboutUs Component</div>;
      <Link to="/home">Go to Home</Link>

      <button onClick={doAndGoToHome}>Do something & Go To Home</button> <br />
      <button onClick={() => navigate(-1)}> Previous</button>
      <button onClick={()=> navigate(1)}>Go Next</button>
    </>
  );

}
