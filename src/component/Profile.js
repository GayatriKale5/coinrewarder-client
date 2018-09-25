import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Profile extends Component {
  render() {
    return (
     <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-8  col-md-7 col-md-6 col-lg-5">
                <form method="#">
                    <div className="form-row text-center mt-3">
                        <div className="form-group col-12  mt-5 mb-4">
                            <img className="img-responsive logo-image" src="./image/logo.png" alt="Logo"/>
                        </div>

                        <div className="form-group col-12  name-icon mt-1">
                            <input type="text" placeholder="Username" className="form-control" id="formGroupExampleInput" required/>
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="form-group col-12  countryicon mt-1">
                            <input type="text" placeholder="Country" className="form-control" id="formGroupExampleInput2" required/>
                            <i className="fas fa-map-marked-alt"></i>
                        </div>
                        <div className="form-group col-12  referralicon mt-1">
                            <input type="text" placeholder="Referral" className="form-control" id="formGroupExampleInput3" required/>
                            <i className="fas fa-user-plus"></i>
                        </div>
                        <div className="form-group col-12  email-icon mt-1">
                            <input type="email" placeholder="Email" className="form-control" id="formGroupExampleInput4"/>
                            <i className="far fa-envelope"></i>
                        </div>
                        <div className="form-group col-12 mt-4">
                            <button type="submit" className="btn btn-primary submitbutton">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>       
    );
  }
}

export default Profile;