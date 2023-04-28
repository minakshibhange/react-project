import React, { useState } from 'react';
import "./formInput.css";

export default function FormValidation() {
    const [user, setUser] = useState({
        fname: "", lname: "", mname: "", faname: "",
        address: "", gender: "", state: "", city: "", dob: "", pin: "", course: "", email: "", });
        const [fNameErrorMsg, setfNameErrorMsg] = useState("");
        const [lNameErrorMsg, setlNameErrorMsg] = useState("");
   
   
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(user);
    };

    const changeHandler = (e) => {
        const inputField = e.target.name;
        if (inputField == "fname") {
            setUser(e.target.value);
          if (!e.target.value) {
            setfNameErrorMsg("firstname should not be empty");
          } else if (e.target.value.length < 5) {
            setfNameErrorMsg("firstname should have atleast 5 chars");
          } else {
            setfNameErrorMsg("");
          }
        } else if (inputField == "lname") {
            setUser(e.target.value);
          if (!e.target.value) {
            setlNameErrorMsg("lastname should not be empty");
          } else if (e.target.value.length < 5) {
            setlNameErrorMsg("lastname should have atleast 5 chars");
          } else {
            setlNameErrorMsg("");
          }
        } else   {
        }
      };
    return (
        <>
            <section className="h-100 bg-dark">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                        <div className="col-xl-12">
                                            <div className="card-body p-md-5 text-black">
                                                <h3 className="mb-5 text-uppercase">Student registration form</h3>
                                                <form onSubmit={submitHandler}>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input type="text" name="fname"
                                                                    value={user.fname}
                                                                    onChange={changeHandler} className="form-control form-control-lg" />
                                                                      <span class="text-danger">{fNameErrorMsg}</span> <br/>
                                                                     <label className="form-label" for="fname">First name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input type="text" name="lname"
                                                                    value={user.lname}
                                                                    onChange={changeHandler} className="form-control form-control-lg" />
                                                                      <span class="text-danger">{lNameErrorMsg}</span> <br/>
                                                                <label className="form-label" for="lname">Last name</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input type="text" name="mname"
                                                                    value={user.mname}
                                                                    onChange={changeHandler} className="form-control form-control-lg" />
                                                                <label className="form-label" for="mname">Mother's name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input type="text" name="faname"
                                                                    value={user.faname}
                                                                    onChange={changeHandler} className="form-control form-control-lg" />
                                                                <label className="form-label" for="faname">Father's name</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="text" name="address"
                                                            value={user.address}
                                                            onChange={changeHandler} className="form-control form-control-lg" />
                                                        <label className="form-label" for="address">Address</label>
                                                    </div>

                                                    <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                                                        <h6 className="mb-0 me-4">Gender: </h6>

                                                        <div className="form-check form-check-inline mb-0 me-4">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                                value="option1" />
                                                            <label className="form-check-label" for="femaleGender">Female</label>
                                                        </div>

                                                        <div className="form-check form-check-inline mb-0 me-4">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                                value="option2" />
                                                            <label className="form-check-label" for="maleGender">Male</label>
                                                        </div>

                                                        <div className="form-check form-check-inline mb-0">
                                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                                value="option3" />
                                                            <label className="form-check-label" for="otherGender">Other</label>
                                                        </div>

                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">

                                                            <select className="select" name="state"
                                                                value={user.state}
                                                                onChange={changeHandler}>
                                                                <option value="1">State</option>
                                                                <option value="2">Option 1</option>
                                                                <option value="3">Option 2</option>
                                                                <option value="4">Option 3</option>
                                                            </select>

                                                        </div>
                                                        <div className="col-md-6 mb-4">

                                                            <select className="select" name="city"
                                                                value={user.city}
                                                                onChange={changeHandler}>
                                                                <option value="1">City</option>
                                                                <option value="2">Option 1</option>
                                                                <option value="3">Option 2</option>
                                                                <option value="4">Option 3</option>
                                                            </select>

                                                        </div>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="text" name="dob"
                                                            value={user.dob}
                                                            onChange={changeHandler} className="form-control form-control-lg" />
                                                        <label className="form-label" for="dob">DOB</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="number" name="pin"
                                                            value={user.pin}
                                                            onChange={changeHandler} className="form-control form-control-lg" />
                                                        <label className="form-label" for="pin">Pincode</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="text" name="course"
                                                            value={user.course}
                                                            onChange={changeHandler} className="form-control form-control-lg" />
                                                        <label className="form-label" for="course">Course</label>
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input type="email" name="email"
                                                            value={user.email}
                                                            onChange={changeHandler} className="form-control form-control-lg" />
                                                        <label className="form-label" for="email">Email ID</label>
                                                    </div>
                                                    <br />
                                                    <br />
                                                    state data: {setUser}
                                                    <div className="d-flex justify-content-end pt-3">
                                                        <button type="edit" className="btn btn-light btn-lg">Reset all</button>
                                                        <button type="submit" className="btn btn-warning btn-lg ms-2">Submit form</button>
                                                    </div>
                                                </form> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   </section>  
        </>
    );
}
