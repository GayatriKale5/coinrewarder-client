import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-8 col-md-7 col-lg-5 mt-5">               
                <form>
                    <div className="form-row text-center">
                        <div className="form-group col-12 mt-3 mb-4">
                           <img className="img-responsive logo-image" src="./image/logo.png" alt="Logo"/>
                        </div>

                        <div className="form-group col-12 name_icon">
                            <input type="text" placeholder="Username Or Email" className="form-control" id="formGroupExampleInput"/>
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="form-group col-12 mt-1 pwd_icon">
                            <input type="password" placeholder="Password" className="form-control" id="formGroupExampleInput2" required/>
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className="form-group col-12 col-lg-4 pr-2 text-left">
                            <div className="form-check">
                                 <label className="label2">Remember me<input type="checkbox" checked="checked"/><span className="check-mark"></span> </label>
                            </div>
                        </div>
                        <div className="form-group col-12 col-lg-8 mt-1 text-left">
                            <div className="g-recaptcha recaptcha" data-sitekey="6LcVPm4UAAAAABiWg8tWCdqtLnqtSbnCeSBGUoE9"></div>
                        </div>
                        <div className="form-group col-12">
                            <button type="submit" className="btn btn-primary log-in"> Log In</button>
                        </div>
                        <div className="form-group col-6 link">
                            <Link to="/">Dont have an Account?</Link>
                        </div>
                        <div className="form-group col-6 link">
                            <Link to="/">Forgot Password?</Link>
                        </div>
                        <div className="form-group col-12 mt-2">
                            <p className="text-center social-link"> or Login with social media links</p>
                        </div>
                        <div className="form-group col-12 col-xl-6 socialbutton">
                            <Link className="btn  btn-social btn-facebook" to="/">
                        <span className="fab fa-facebook-f"></span> Login with Facebook</Link>
                        </div>
                        <div className="form-group col-12 col-xl-6  socialbutton">
                            <Link className="btn  btn-social btn-google" to="/">
                        <span className="fab fa-google-plus-g"></span> Login with Google &nbsp;&nbsp; </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
        
    );
  }
}

export default Login;