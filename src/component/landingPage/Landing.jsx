import React, { Component } from 'react';

import LandingPageLogo from './LandingPageLogo.jsx';
import LandingPageRewardsBtns from './LandingPageRewardsBtns.jsx';
import LandingPageSliderNew from './LandingPageSliderNew.jsx';
import LandingPageJumbotron from './LandingPageJumbotron.jsx';
import LandingPageMembers from './LandingPageMembers.jsx';
import LandingPageGiftCardBtns from './LandingPageGiftCardBtns.jsx';
import Footer from '../Footer.jsx';

class Landing extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid px-md-0">
                    <LandingPageLogo />
                    <LandingPageRewardsBtns />
                    <LandingPageSliderNew />
                    <LandingPageJumbotron />
                    <LandingPageMembers />
                    <LandingPageGiftCardBtns />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Landing;