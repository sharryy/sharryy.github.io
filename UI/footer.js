import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

const Footer = () => {
    return (
        <footer id="contact-block" className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-block">
                            <div className="section-title">
                                <h2 className="title-main">
                                    05 <span>Contact</span>
                                </h2>
                                <p className="sub-title">Have a project? Let me know!</p>
                            </div>
                            <div className="contact-form-area">
                                <form id="contact_form" className="contact-form" action="#">
                                    <div className="row gx-4">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input id="name" name="name" type="text" className="form-control"
                                                       placeholder="Your Name*"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" id="email" name="email" type="email"
                                                       placeholder="Your Email*"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
												<textarea id="message" name="message" className="form-control" rows="4"
                                                          style={{resize: 'none'}}
                                                          placeholder="Anything that we can help you?"/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary">Send Me</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="footer-content-wrapper">
                            <div className="footer-widget-area">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <aside className="widget widget_links">
                                            <h2 className="widget-title"><span>Quick Link</span></h2>
                                            <div className="widget-content">
                                                <ul>
                                                    <li><Link href="/about">About</Link></li>
                                                    <li><Link href="/services">Services</Link></li>
                                                    <li><Link href="/portfolio">Portfolio</Link></li>
                                                </ul>
                                            </div>
                                        </aside>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <aside className="widget widget_contact">
                                            <div className="widget-content">
                                                <div className="single-contact-info">
                                                    <div className="icon">
                                                        <FontAwesomeIcon icon={faEnvelope}/>
                                                    </div>
                                                    <p><a href="mailto:example@gmail.com">example@gandu.com</a></p>
                                                </div>
                                                <div className="single-contact-info">
                                                    <div className="icon">
                                                        <FontAwesomeIcon icon={faPhone}/>
                                                    </div>
                                                    <p><a href='tel:0301'>0301 teri pen nu lun</a></p>
                                                </div>
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                            <div className="copyright-text text-center">
                                <p> Coded with <a className='mx-2' style={{cursor: 'pointer'}}><FontAwesomeIcon
                                    icon={faHeart}/></a> by <a target='_blank' href="https://saqibrasheed.netlify.app/">Saqib
                                    Rasheed</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;