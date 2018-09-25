import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class DashboardContent extends Component {
    render() {
        return (
            <div className="row dashboard-btns-row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="card chat-box">
                                <div className="card-header">
                                    <h6>Chat Box</h6>
                                </div>
                                <div className="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="card news-feed">
                                <div className="card-header">
                                    <h6>News Feed</h6>
                                </div>
                                <div className="card-body">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="td-fa-circle">
                                                    <i className="fas fa-minus"></i>
                                                </td>
                                                <td>
                                                    <a to="/">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="td-fa-circle">
                                                    <i className="fas fa-minus"></i>
                                                </td>
                                                <td>
                                                    <a to="/">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="td-fa-circle">
                                                    <i className="fas fa-minus"></i>
                                                </td>
                                                <td>
                                                    <a to="/">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardContent;