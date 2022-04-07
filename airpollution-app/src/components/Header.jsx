import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="app-header">
            <h1 className='header-logo'>Logo here</h1>
            <nav className="header-nav">
                <ul className="navigations">
                    <li className="home-link" >
                        <Link to="/">Home</Link>
                    </li>
                    <li className="recomendations-link">
                        <Link to="/recomendations">recomendations</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Header;