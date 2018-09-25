import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

class EarnFreePointsTabs extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: 'all'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === 'all' })}
                            onClick={() => { this.toggle('all'); }}
                        >
                            <i className="far fa-check-circle"></i> All
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === 'apps' })}
                            onClick={() => { this.toggle('apps'); }}
                        >
                            <i className="fas fa-tablet-alt"></i> Apps
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === 'ptc' })}
                            onClick={() => { this.toggle('ptc'); }}
                        >
                            <i className="fas fa-tablet-alt"></i> PTC
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === 'survey' })}
                            onClick={() => { this.toggle('survey'); }}
                        >
                            <i className="fas fa-clipboard-list"></i> Survey
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === 'video' })}
                            onClick={() => { this.toggle('video'); }}
                        >
                            <i className="fas fa-video"></i> Video
                        </NavLink>
                    </NavItem>
                </Nav>

                <div className="tab-content earn-point-tab-content earn-point-tab-content-shadow pt-3">
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="all">
                            <Row>
                                <Col sm="12">
                                    <p className="pl-3">All Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className="row text-center">
                                        <div className="col-12">
                                            <Link to="/">
                                                <button type="button" className="btn btn-outline-info dashboard-btn dummy-earnpoint-btn">Lorem Ipsum</button>
                                            </Link>
                                            <Link to="/">
                                                <button type="button" className="btn btn-outline-info dashboard-btn dummy-earnpoint-btn">Lorem Ipsum</button>
                                            </Link>
                                            <Link to="/">
                                                <button type="button" className="btn btn-outline-info dashboard-btn dummy-earnpoint-btn">Lorem Ipsum</button>
                                            </Link>
                                            <Link to="/">
                                                <button type="button" className="btn btn-outline-info dashboard-btn dummy-earnpoint-btn">Lorem Ipsum</button>
                                            </Link>
                                            <Link to="/">
                                                <button type="button" className="btn btn-outline-info dashboard-btn dummy-earnpoint-btn">Lorem Ipsum</button>
                                            </Link>
                                            <Link to="/">
                                                <button type="button" className="btn btn-outline-info dashboard-btn dummy-earnpoint-btn">Lorem Ipsum</button>
                                            </Link>
                                            <Link to="/">
                                                <button type="button" className="btn btn-outline-info dashboard-btn dummy-earnpoint-btn">Lorem Ipsum</button>
                                            </Link>
                                            <Link to="/">
                                                <button type="button" className="btn btn-outline-info dashboard-btn dummy-earnpoint-btn">Lorem Ipsum</button>
                                            </Link>
                                            <Link to="/">
                                                <button type="button" className="btn btn-outline-info dashboard-btn dummy-earnpoint-btn">Lorem Ipsum</button>
                                            </Link>
                                            <Link to="/">
                                                <button type="button" className="btn btn-outline-info dashboard-btn dummy-earnpoint-btn">Lorem Ipsum</button>
                                            </Link>
                                            <Link to="/">
                                                <button type="button" className="btn btn-outline-info dashboard-btn dummy-earnpoint-btn">Lorem Ipsum</button>
                                            </Link>
                                            <Link to="/">
                                                <button type="button" className="btn btn-outline-info dashboard-btn dummy-earnpoint-btn">Lorem Ipsum</button>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="apps">
                            <Row>
                                <Col sm="12">
                                    <p className="pl-3">Apps Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="ptc">
                            <Row>
                                <Col sm="12">
                                    <p className="pl-3">PTC Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="survey">
                            <Row>
                                <Col sm="12">
                                    <p className="pl-3">Survey Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="video">
                            <Row>
                                <Col sm="12">
                                    <p className="pl-3">Video Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </div >
        );
    }
}


export default EarnFreePointsTabs;