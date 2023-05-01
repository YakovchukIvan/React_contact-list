import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">

                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to='/new-contact'>
                            Add contact
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/'>
                            Contact List
                        </Link>
                    </li>
                                    
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-primary" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header