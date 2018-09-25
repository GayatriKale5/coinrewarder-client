import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPageGiftCardBtns extends Component {
    render() {
        return (
            <div className="row mt-5 mb-4 gift-card-row">
                <div className="col-12 my-3 text-center">
                    <h5>Ready for your free Gift Card?</h5>
                </div>
                <div className="col-12 text-center">
                    <Link to="/" className="btn btn-primary landing-page-btn gift-card-btn sign-up-gift-px mr-2">	Sign Up</Link>
                    <Link to="/" className="btn btn-primary landing-page-btn gift-card-btn login-gift-px mr-2">Login</Link>
                </div>
            </div>
        );
    }
}

export default LandingPageGiftCardBtns;