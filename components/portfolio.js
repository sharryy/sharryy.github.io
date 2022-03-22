import {useState} from "react";

const Portfolio = () => {

    const projects = [
        {_id: 1, category: 2, title: 'Creative Design', image: '/portfolio1.png', link: 'https://www.behance.net/gallery/92379015/Creative-Design'},
        {_id: 2, category: 2, title: 'Creative Design', image: '/portfolio1.png', link: 'https://www.behance.net/gallery/92379015/Creative-Design'},
        {_id: 3, category: 3, title: 'Creative Design', image: '/portfolio2.png', link: 'https://www.behance.net/gallery/92379015/Creative-Design'},
        {_id: 4, category: 3, title: 'Creative Design', image: '/portfolio2.png', link: 'https://www.behance.net/gallery/92379015/Creative-Design'},
        {_id: 5, category: 4, title: 'Creative Design', image: '/portfolio3.png', link: 'https://www.behance.net/gallery/92379015/Creative-Design'},
        {_id: 6, category: 4, title: 'Creative Design', image: '/portfolio3.png', link: 'https://www.behance.net/gallery/92379015/Creative-Design'},
        {_id: 7, category: 5, title: 'Creative Design', image: '/portfolio4.png', link: 'https://www.behance.net/gallery/92379015/Creative-Design'},
        {_id: 8, category: 5, title: 'Creative Design', image: '/portfolio4.png', link: 'https://www.behance.net/gallery/92379015/Creative-Design'}
    ];

    const categories = [{_id: 1, name: 'All'}, {_id: 2, name: 'Print'}, {_id: 3, name: 'Web Design'}, {
        _id: 4,
        name: 'Mockup'
    }, {_id: 5, name: 'Applications'}];
    const [selectedCategory, setSelectedCategory] = useState(1);

    const renderProjects = () => {
        const selectedProjects = selectedCategory === 1 ? projects : projects.filter(project => project.category === selectedCategory);
        return selectedProjects.map(project => {
            return (
                <div key={project._id} className="item col-lg-4 col-xl-3 col-md-6 application">
                    <a className="portfolio-item" href={project.link} target='_blank'>
                        <figure className="portfolio-thumb">
                            <img src={project.image} alt="portfolio Item"/>
                        </figure>
                        <div className="overlay-wrapper">
                            <div className="overlay"/>
                            <div className="portfolio-info">
                                <p className="cat">{categories[project.category - 1].name}</p>
                                <h3 className="heading">{project.title}</h3>
                            </div>
                        </div>
                    </a>
                </div>
            )
        });
    }

    return (
        <div id="portfolio-block" className="portfolio-block pd-t-170">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <h2 className="title-main">
                                03 <span>Portfolio</span>
                            </h2>
                            <p className="sub-title">I work with you, not for you!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container custom-container-1650">
                <div className="row">
                    <div className="col-12 text-center">
                        <ul className="portfolio-filter">
                            {categories.map(category => (
                                <li key={category._id} className='mx-2'>
                                    <a
                                        href="/"
                                        className={`filter ${selectedCategory === category._id ? 'active' : ''}`}
                                        onClick={e => {
                                            e.preventDefault();
                                            setSelectedCategory(category._id)
                                        }}
                                    >{category.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="row portfolio-grid gutters-40">

                    {renderProjects()}

                </div>
            </div>
        </div>
    )
}

export default Portfolio;