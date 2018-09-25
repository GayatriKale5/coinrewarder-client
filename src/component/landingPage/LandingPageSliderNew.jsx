import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class LandingPageSliderNew extends Component {
    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-12 earn-points-landing-page">
                        <img src="img/landing/border.png" alt="border" className="border-left-img" />
                        <img src="img/landing/border.png" alt="border" className="border-right-img" />
                        <h5 className="text-center pt-5 pb-4">Earn points for things you already do online</h5>
                    </div>
                </div>

                <div id="id=landing-page-earn-point-slider">
                    <Carousel className="landingPageCarousel">
                        <Carousel.Item className="landingPageCarouselItem">
                            <div className="row px-lg-5">
                                <div className="col-6 col-md-3 landing-page-slider-colm">
                                    <Link to="/">
                                        <img alt="earn points" src="./img/landing/1.png" />
                                        <Carousel.Caption>
                                            <h6>Completing <br /> Surveys</h6>
                                        </Carousel.Caption>
                                    </Link>
                                </div>
                                <div className="col-6 col-md-3 landing-page-slider-colm">
                                    <Link to="/">
                                        <img alt="earn points" src="./img/landing/2.png" />
                                        <Carousel.Caption>
                                            <h6>Watching <br /> Videos</h6>
                                        </Carousel.Caption>
                                    </Link>
                                </div>
                                <div className="col-6 col-md-3 landing-page-slider-colm">
                                    <Link to="/">
                                        <img alt="earn points" src="./img/landing/3.png" />
                                        <Carousel.Caption>
                                            <h6>Downloading <br /> Apps</h6>
                                        </Carousel.Caption>
                                    </Link>
                                </div>
                                <div className="col-6 col-md-3 landing-page-slider-colm">
                                    <Link to="/">
                                        <img alt="earn points" src="./img/landing/4.png" />
                                        <Carousel.Caption>
                                            <h6>Searching for <br /> Websites</h6>
                                        </Carousel.Caption>
                                    </Link>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className="landingPageCarouselItem">
                            <div className="row px-lg-5">
                                <div className="col-6 col-md-3 landing-page-slider-colm">
                                    <Link to="/">
                                        <img alt="earn points" src="./img/landing/1.png" />
                                        <Carousel.Caption>
                                            <h6>Completing <br /> Surveys</h6>
                                        </Carousel.Caption>
                                    </Link>
                                </div>
                                <div className="col-6 col-md-3 landing-page-slider-colm">
                                    <Link to="/">
                                        <img alt="earn points" src="./img/landing/2.png" />
                                        <Carousel.Caption>
                                            <h6>Watching <br /> Videos</h6>
                                        </Carousel.Caption>
                                    </Link>
                                </div>
                                <div className="col-6 col-md-3 landing-page-slider-colm">
                                    <Link to="/">
                                        <img alt="earn points" src="./img/landing/3.png" />
                                        <Carousel.Caption>
                                            <h6>Downloading <br /> Apps</h6>
                                        </Carousel.Caption>
                                    </Link>
                                </div>
                                <div className="col-6 col-md-3 landing-page-slider-colm">
                                    <Link to="/">
                                        <img alt="earn points" src="./img/landing/4.png" />
                                        <Carousel.Caption>
                                            <h6>Searching for <br /> Websites</h6>
                                        </Carousel.Caption>
                                    </Link>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div >
        );
    }
}

export default LandingPageSliderNew;