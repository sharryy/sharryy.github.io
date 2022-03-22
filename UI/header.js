import Link from "next/link";

const Header = () => {
    return(
        <header className="site-header default-header-style">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="navigation-area">
                            <div className="site-branding">
                                <Link href="/"><a>
                                    <img src="/logo.svg" alt="Site Logo" style={{width: '50px'}} />
                                </a></Link>
                            </div>
                            <div className="site-navigation">
                                <nav className="navigation">
                                    <div className="menu-wrapper">
                                        <div className="menu-content">
                                            <ul className="mainmenu">
                                                <li>
                                                    <Link className="nav-link" href="/">Home</Link>
                                                </li>
                                                <li>
                                                    <Link className="nav-link" href="/services">Services</Link>
                                                </li>
                                                <li>
                                                    <Link className="nav-link" href="/about">About</Link>
                                                </li>
                                                <li>
                                                    <Link className="nav-link" href="/portfolio">Portfolio</Link>
                                                </li>
                                                <li>
                                                    <Link className="nav-link" href="/contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="hamburger-menus">
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-sidebar-menu sidebar-menu">
                <div className="overlaybg"></div>
            </div>
        </header>
    )
}

export default Header;