import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return(
        <div id="about-block" className="about-us-block pd-t-170">
            <div className="container container-1200">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <h2 className="title-main">
                                02 <span>About</span>
                            </h2>
                            <p className="sub-title">I work with you, not for you!</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center flex-column-reverse flex-lg-row mrb-55">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <h3 className="heading">About Me</h3>
                            <p className="description">I am Dynamic Gandu & Ultimate Chutiya with 1 Lumd & 2 Balls!</p>
                            <p>Impossible considered invitation him men instruiment saw celebr ated unpleasant. Put rest
                                and must
                                set kinid next many near nay. He exquisite continued explained middleton am. Voice hours
                                you woody has
                                she think equal. Estate in moment he at on wonder at season little. Six garden result
                                summer.</p>
                            <p>Her extensive perceved may any sincerity extremity. Indeed add rather may pretty see. Old
                                right these
                                alone keeps. By sometime intention smallness he northward.</p>
                            <div className="author-sign">
                                <img src="/sign.png" alt="Author Sign"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mock-up-thumb">
                            <img src="/about.png" alt="About Mock"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className="fanfact-promo-numbers">
                            <div className="promo-number">
                                <div className="odometer">117</div>
                                <h4 className="promo-title">Happy Client</h4>
                            </div>
                            <div className="promo-number">
                                <div className="odometer">543</div>
                                <h4 className="promo-title">Years Experience</h4>
                            </div>
                            <div className="promo-number">
                                <div className="odometer">4</div>
                                <h4 className="promo-title">Award Wines</h4>
                            </div>
                            <div className="promo-number">
                                <div className="odometer">124</div>
                                <h4 className="promo-title">Project Complete</h4>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <div className="skill-with-social">
                            <div className="skill-list">
                                <h3 className="heading">My Skills</h3>
                                <div className="single-skill">
                                    <h3 className="skill-title">Developing</h3>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "90%"}}>
                                            <span>90%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-skill">
                                    <h3 className="skill-title">Design</h3>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "88%"}}>
                                            <span>88%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-skill">
                                    <h3 className="skill-title">Marketing</h3>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: "85%"}}>
                                            <span>85%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="social-status">
                                <h3 className="heading">Follow Me</h3>
                                <div className="social-profile-list">
                                    <Link href="/"><a><i><FontAwesomeIcon icon={faFacebookF} /></i></a></Link>
                                    <Link href="/"><a><i><FontAwesomeIcon icon={faInstagram} /></i></a></Link>
                                    <Link href="/"><a><i><FontAwesomeIcon icon={faLinkedinIn} /></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;