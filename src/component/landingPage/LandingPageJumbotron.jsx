import React, { Component } from 'react';

class LandingPageJumbotron extends Component {
    render() {
        return (
            <div className="row jumbotron paid-members-jumbotron mt-5 text-center">
                <div className="col-12 pb-2 pt-3">
                    <p>We've paid our members over </p>
                </div>
                <div className="col-12">
                    <i>₹</i><h3 className="btn btn-primary landing-page-btn mr-2">1000000</h3>
                </div>
            </div>
        );
    }
}

export default LandingPageJumbotron;