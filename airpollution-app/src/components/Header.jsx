import { Link } from "react-router-dom";

function Header() {
    return(
        <header className="app-header">
            <h1 className='header-logo'> 
                <Link to="/">Breathe</Link>
            </h1>
        </header>
    )
}

export default Header;