import React, { Component } from 'react';

import EarnFreePointsHeader from './EarnFreePointsHeader.jsx';
import EarnFreePointsTabs from './EarnFreePointsTabs.jsx';

import DashboardTopNav from '../DashboardTopNav.jsx';
import DashboardSidebar from '../DashboardSidebar.jsx';
import ShowRecentActivity from '../ShowRecentActivity.jsx';
import DashboardFooter from '../DashboardFooter.jsx';

class EarnFreePoints extends Component {

    render() {
        return (

            <div className="wrapper">

                <DashboardTopNav />
                <DashboardSidebar />

                <div id="main-content" className="dashboard-page">
                    <div className="container-fluid dashboard-container-fluid pr-0">
                        <div className="row wrapper-two">
                            <div className="show-recent-activity-dashboard">

                                {/* main content */}
                                <div className="container-fluid earn-points-container-fluid">
                                    <EarnFreePointsHeader />
                                    <EarnFreePointsTabs />
                                </div>
                                {/* main content end */}

                            </div>
                            {/* // < !--show - recent - activity - dashboard end-- > */}

                            <ShowRecentActivity />

                        </div>
                        {/* // < !--wrapper - two end-- > */}

                    </div>
                    {/* // < !--dashboard - container - fluid end-- > */}

                    <DashboardFooter />
                </div>
                {/* // < !--main - content end-- > */}

            </div>



        );
    }
}

export default EarnFreePoints;