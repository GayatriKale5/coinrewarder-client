import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Signup extends Component {
  render() {
    return (
     <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-8 col-md-7 col-lg-5">
                <form method="#">
                    <div className="form-row text-center">
                        <div className="form-group col-12 mt-3">
                            <h2 className="text-center heading">Create Account</h2>
                        </div>

                        <div className="form-group col-12 mt-1 nameicon">
                            <input type="text" placeholder="Username" className="form-control" id="formGroupExampleInput"/>
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="form-group col-12  emailicon">
                            <input type="email" placeholder="Email" className="form-control" id="formGroupExampleInput2"/>
                            <i className="far fa-envelope"></i>
                        </div>
                        <div className="form-group col-12  pwdicon">
                            <input type="password" placeholder="Password" className="form-control" id="formGroupExampleInput3" required/>
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className="form-group col-12  pwdicon">
                            <input type="password" placeholder="Confirm Password" className="form-control" id="formGroupExampleInput4" required/>
                            <i className="fas fa-lock"></i>
                        </div>

                        <div className="form-group col-12 text-left">
                            <div className="g-recaptcha" data-sitekey="6LcVPm4UAAAAABiWg8tWCdqtLnqtSbnCeSBGUoE9"></div>
                        </div>
                        <div className="form-group col-12  text-left checkbutton">
                            <div className="form-check">
                                <label className="label1">I have read and agreed to the Terms of Use and privacy policy <input type="checkbox" checked="checked"/><span className="checkmark"></span></label>
                            </div>
                        </div>`
                        <div className="form-group col-12 mt-1">
                            <button type="submit" className="btn btn-primary sign-in"> Create Account</button>
                        </div>

                        <div className="form-group col-3 fancy-line"></div>
                        <div className="form-group col-md-6">
                            <p className="text-center socialmedialink"> or Sign up with social media links</p>
                        </div>
                        <div className="form-group col-3 fancy-line"></div>


                        <div className="form-group col-12 col-xl-6 social-button">
                            <Link className="btn  btn-social btn-facebook" to="/">
                        <span className="fab fa-facebook-f"></span>Signup with Facebook</Link>
                        </div>
                        <div className="form-group col-12 col-xl-6 social-button">
                            <Link className="btn  btn-social btn-google" to="/">
                        <span className="fab fa-google-plus-g"></span> Sign in with Google &nbsp;&nbsp;</Link>
                        </div>
                        <div className="form-group col-12 mt-2">
                            <p className="text-center loginlink">Already have an Account ? <Link to="/">Log in </Link> instead</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>        
    );
  }
}

export default Signup;