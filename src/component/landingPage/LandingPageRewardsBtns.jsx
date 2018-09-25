import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPageRewardsBtns extends Component {
    render() {
        return (
            <div className="row justify-content-center mt-md-1">
			<div className="col-12 col-sm-10 col-md-8 col-lg-5 mt-5 mb-2 p-3 gift-rewards-landing-page 
			d-sm-flex justify-content-center align-items-center text-center">
				<h6 className="mr-2">Grab your rewards and gift cards.</h6>			
				<Link to="/" className="btn btn-primary landing-page-btn sign-up-px mr-2">Sign Up</Link>
				<Link to="/" className="btn btn-primary landing-page-btn login-px mr-2">Login</Link>			
			</div>			
		</div>
        );
    }
}

export default LandingPageRewardsBtns;