import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPageMembers extends Component {
    render() {
        return (
            <div className="row px-lg-5 person-img-text-row">
                <div className="col-12 col-lg-6">
                    <div className="row mt-4">
                        <div className="col-12 col-md-3 text-center text-md-right">
                            <img className="img-responsive" src="img/landing/person1.png" alt="blog" />
                        </div>
                        <div className="col-12 col-md-9">
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 	eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
						</p>
                            <Link to="/"><h6>Ankit Gupta, Member since 2016</h6></Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 pr-lg-3">
                    <div className="row mt-4">
                        <div className="col-12 col-md-3 text-center text-md-right">
                            <img className="img-responsive" src="img/landing/person2.png" alt="blog" />
                        </div>
                        <div className="col-12 col-md-9">
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 	eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
						</p>
                            <Link to="/"><h6>Rihika Shah, Member since 2015</h6></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPageMembers;