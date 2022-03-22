import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

const Services = () => {

    const services = [
        {_id: 1, name: 'Product Design', image: '/1.png'},
        {_id: 2, name: 'UX-UI Design', image: '/1.png'},
        {_id: 3, name: 'Application', image: '/1.png'},
        {_id: 4, name: 'Web Design', image: '/1.png'},
        {_id: 5, name: 'Print Design', image: '/1.png'},
        {_id: 6, name: 'App Design', image: '/1.png'}
    ]

    return(
        <div id="service-block" className="services-block pd-t-170">
            <div className="container container-1200">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <h2 className="title-main">
                                01 <span>Services</span>
                            </h2>
                            <p className="sub-title">I work with you, not for you!</p>
                        </div>
                    </div>
                </div>

                <div className="row services-items-list gutters-30">

                    {services.map(service => {
                        return(
                            <div key={service._id} className="col-lg-4 col-md-6">
                                <div className="service-item">
                                    <div className="service-icon">
                                        <img src={service.image} alt="Icon"/>
                                    </div>
                                    <FontAwesomeIcon icon={faAngleRight} className="ms-3 icon-angle-title"/>
                                    <h3 className="title">{service.name}</h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Services;