import React, { Component } from 'react';

class DashboardTopNav extends Component {

    render() {
        return (
            <div id="top-header">
                <div className="logo">
                    <img src="img/dashboard-header/logo.png" alt="logo" />
                </div>
                <button type="button" id="left-side-navbarCollapse" className="btn btn-primary landing-page-btn toggle-btn">
                    <i className="fas fa-align-justify"></i>
                </button>
                <div className="float-right">
                    <button type="button" id="toggle-recent-activity" className="btn btn-primary landing-page-btn toggle-btn">
                        <i className="fas fa-ellipsis-v"></i>
                    </button>
                    <button type="button" className="btn btn-primary landing-page-btn logout-btn">
                        <i className="fas fa-power-off"></i>
                    </button>
                </div>
            </div>

            // {/* <!-- top header div end --> */ }

        );
    }
}

export default DashboardTopNav;
