import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DashboardSidebar extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.state = {
            dropdownOpen: false,
            dropdownOpen2: false,
            dropdownOpen3: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggle2() {
        this.setState(prevState => ({
            dropdownOpen2: !prevState.dropdownOpen2
        }));
    }

    toggle3() {
        this.setState(prevState => ({
            dropdownOpen3: !prevState.dropdownOpen3
        }));
    }

    render() {
        return (
            <nav id="left-side-navbar" className="">

                <ul className="list-unstyled ul-menu">

                    <li className="welcome-user">
                        <i><img src="img/dashboard-header/dashboard-person.png" className="welcome-user-img" alt="welcome user" /></i>
                        <b>Welcome back, <br /> Mr. Saha</b>
                    </li>

                    <div className="scrollable">
                        <li>
                            <Link to="dashboard-page">
                                <i className="fas fa-tachometer-alt"></i>
                                <b>Dashboard</b>
                            </Link>
                        </li>

                        <li>
                            <Link to="/">
                                <i className="fas fa-certificate"></i>
                                <b>Top Offers</b>
                            </Link>
                        </li>

                        <li>
                            <Link to="earn-free-points">
                                <i className="fas fa-star"></i>
                                <b>Earn Points</b>
                            </Link>
                        </li>

                        <li>
                            <Link to="/">
                                <i className="fas fa-money-bill-alt"></i>
                                <b>Lottery</b>
                            </Link>
                        </li>

                        <li>
                            <Link to="/">
                                <i className="fas fa-share-alt"></i>
                                <b>Refer and Earn 10%</b>
                            </Link>
                        </li>


                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret>
                                <i className="fas fa-mouse-pointer"></i>
                                <b> Redeem Points</b>
                            </DropdownToggle>
                            <DropdownMenu>

                                <DropdownItem>
                                    <i className="fas fa-mouse-pointer"></i>
                                    <b>Lorem Ipsum</b>
                                </DropdownItem>

                                <DropdownItem>
                                    <i className="fas fa-mouse-pointer"></i>
                                    <b>Lorem Ipsum</b>
                                </DropdownItem>

                                <DropdownItem>
                                    <i className="fas fa-mouse-pointer"></i>
                                    <b>Lorem Ipsum</b>
                                </DropdownItem>

                            </DropdownMenu>
                        </Dropdown>

                        <li>
                            <Link to="/">
                                <i className="fas fa-clipboard-list"></i>
                                <b>Coupons</b>
                            </Link>
                        </li>

                        <li>
                            <Link to="/">
                                <i className="fas fa-users"></i>
                                <b>Referrals</b>
                            </Link>
                        </li>

                        <Dropdown isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
                            <DropdownToggle caret>
                                <i className="fas fa-user-circle"></i>
                                <b>Account</b>
                            </DropdownToggle>
                            <DropdownMenu>

                                <DropdownItem>
                                    <i className="fas fa-user"></i>
                                    <b>Profile</b>
                                </DropdownItem>

                                <DropdownItem>
                                    <i className="fas fa-user"></i>
                                    <b>Profile</b>
                                </DropdownItem>

                                <DropdownItem>
                                    <i className="fas fa-user"></i>
                                    <b>Profile</b>
                                </DropdownItem>

                            </DropdownMenu>
                        </Dropdown>

                        {/* <li>
                            <Link to="#history" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                <i className="fas fa-history"></i>
                                <b>History</b>
                            </Link>
                            <ul className="collapse list-unstyled dropdown-ul" id="history">
                                <li>
                                    <Link to="/">
                                        <i className="fas fa-history"></i>
                                        <b>Lorem Ipsum</b>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fas fa-history"></i>
                                        <b>Lorem Ipsum</b>
                                    </Link>
                                </li>
                            </ul>
                        </li> */}

                        <Dropdown isOpen={this.state.dropdownOpen3} toggle={this.toggle3}>
                            <DropdownToggle caret>
                                <i className="fas fa-history"></i>
                                <b>History</b>
                            </DropdownToggle>
                            <DropdownMenu>

                                <DropdownItem>
                                    <i className="fas fa-history"></i>
                                    <b>Lorem Ipsum</b>
                                </DropdownItem>

                                <DropdownItem>
                                    <i className="fas fa-history"></i>
                                    <b>Lorem Ipsum</b>
                                </DropdownItem>

                                <DropdownItem>
                                    <i className="fas fa-history"></i>
                                    <b>Lorem Ipsum</b>
                                </DropdownItem>

                            </DropdownMenu>
                        </Dropdown>

                    </div>
                </ul>
            </nav>
            // {/* <!-- nav end --> */ }

        );
    }
}

export default DashboardSidebar;
