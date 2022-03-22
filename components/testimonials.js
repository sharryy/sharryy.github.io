import Carousel from "react-multi-carousel";

const Testimonials = () => {

    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div id="testimonial-block" className="testimonial-block pd-t-170">
            <div className="container container-1200">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <h2 className="title-main">
                                04 <span>Testimonial</span>
                            </h2>
                            <p className="sub-title">I work with you, not for you!</p>
                        </div>
                    </div>
                </div>


                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div className="owl-carousel testimonial-slider carousel-nav-circle carousel-nav-center">
                            <Carousel responsive={responsive} autoPlay={false}>
                                <div className="testimonial-item item">
                                    <div className="client-area">
                                        <div className="client-thumb">
                                            <img src="/testimonial.png" alt="Daniel Watson"/>
                                        </div>

                                        <div className="client-info">
                                            <h4 className="client-name">Zhon Williams</h4>
                                            <p className="client-designation">
                                                CEO - SoftHopper
                                            </p>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <p>
                                            It is a long established fact that a reader will be distracted by the
                                            readable
                                            content of a page
                                            when established fact that a reader will be looking at its layout.
                                        </p>
                                    </div>
                                </div>
                                <div className="testimonial-item item">
                                    <div className="client-area">
                                        <div className="client-thumb">
                                            <img src="/testimonial.png" alt="Daniel Watson"/>
                                        </div>

                                        <div className="client-info">
                                            <h4 className="client-name">Zhon Williams</h4>
                                            <p className="client-designation">
                                                CEO - SoftHopper
                                            </p>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <p>
                                            It is a long established fact that a reader will be distracted by the
                                            readable
                                            content of a page
                                            when established fact that a reader will be looking at its layout.
                                        </p>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonials;