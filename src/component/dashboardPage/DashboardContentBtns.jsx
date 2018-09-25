import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashboardContentBtns extends Component {
    render() {
        return (
            <div className="row dashboard-btns-row">
                <div className="col-12">
                    <Link to="/">
                        <button type="button" className="btn btn-outline-danger dashboard-btn">Lorem Ipsum</button>
                    </Link>
                    <Link to="/">
                        <button type="button" className="btn btn-outline-warning dashboard-btn">Lorem Ipsum</button>
                    </Link>
                    <Link to="/">
                        <button type="button" className="btn btn-outline-info dashboard-btn">Lorem Ipsum</button>
                    </Link>
                    <Link to="/">
                        <button type="button" className="btn btn-outline-dark dashboard-btn">Lorem Ipsum</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default DashboardContentBtns;