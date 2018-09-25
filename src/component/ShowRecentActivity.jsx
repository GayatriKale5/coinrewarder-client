import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowRecentActivity extends Component {

    render() {
        return (
            <div id="show-recent-activity" className="">
                <div className="card recent-activity">
                    <div className="card-header">
                        <h5>Recent Activity</h5>
                    </div>
                    <div className="card-body scrollable pb-5">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="td-fa-circle">
                                        <i className="fas fa-circle"></i>
                                    </td>
                                    <td>
                                        <Link to="/">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-fa-circle">
                                        <i className="fas fa-circle"></i>
                                    </td>
                                    <td>
                                        <Link to="/">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-fa-circle">
                                        <i className="fas fa-circle"></i>
                                    </td>
                                    <td>
                                        <Link to="/">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-fa-circle">
                                        <i className="fas fa-circle"></i>
                                    </td>
                                    <td>
                                        <Link to="/">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-fa-circle">
                                        <i className="fas fa-circle"></i>
                                    </td>
                                    <td>
                                        <Link to="/">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-fa-circle">
                                        <i className="fas fa-circle"></i>
                                    </td>
                                    <td>
                                        <Link to="/">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-fa-circle">
                                        <i className="fas fa-circle"></i>
                                    </td>
                                    <td>
                                        <Link to="/">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-fa-circle">
                                        <i className="fas fa-circle"></i>
                                    </td>
                                    <td>
                                        <Link to="/">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="td-fa-circle">
                                        <i className="fas fa-circle"></i>
                                    </td>
                                    <td>
                                        <Link to="/">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            // {/* // <!--show recent activity div end-- > */ }

        );
    }
}

export default ShowRecentActivity;