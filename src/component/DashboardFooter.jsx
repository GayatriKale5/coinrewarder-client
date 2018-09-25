import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashboardFooter extends Component {

    render() {
        return (
            <footer className="dashboard-footer show-recent-activity-dashboard">
                <div className="container-fluid footer-container">
                    <div className="row footer-container-row">
                        <div className="col-12">
                            <div className="social-icons my-auto">
                                <h6> <i className="contact-us-text">CONTACT US</i>
                                    <Link to="/"><i className="fab fa-facebook"></i></Link>
                                    <Link to="/"><i className="fab fa-instagram"></i></Link>
                                    <Link to="/"><i className="fab fa-twitter"></i></Link>
                                    <Link to="/"><i className="fab fa-google-plus-g"></i></Link>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="row pb-3">
                        <div className="col-12 text-center my-auto footer-last-row">
                            <Link to="/" className="a-border-right">Terms of Service </Link>
                            <Link to="/" className="a-border-right"> Privacy Policy </Link>
                            <Link to="/" className="disclaimer-class">Disclaimer</Link>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default DashboardFooter;