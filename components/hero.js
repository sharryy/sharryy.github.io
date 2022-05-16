import Link from "next/link";

const Hero = () => {
    return (
        <div id="hero-block" className="hero-block personal-home bg-image"
             style={{backgroundImage: "url('/hero-bg-10.jpg')"}}>
            <div className="waves-effect bottom" style={{backgroundImage: "url('/shape.png')"}}>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="hero-content-area">
                            <div className="hero-desc">
                                Hello <span/> I am
                            </div>
                            <h2 className="hero-title">
                                Shary 
                            </h2>
                            <ul className="hero-services">
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                                <li>Lorem Ipsum</li>
                            </ul>
                            <a href='/resume.pdf' target='_blank' download className="btn btn-primary" style={{cursor: 'pointer'}}>Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;