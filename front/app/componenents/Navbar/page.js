"use cient"
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
  return (
    <>
  

  
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link legacyBehavior href="/" passHref>
          <a className="navbar-brand">SWIM</a>
        
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link legacyBehavior href="/" passHref>
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link legacyBehavior href="/link" passHref>
                <a className="nav-link">Link</a>
              </Link>
            </li>
          
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
          <a href="/auth/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Sign up</a>
          <a href="/auth/login" className="btn btn-outline-success" type="submit">Login</a>
          </form>
        </div>
      </div>
    </nav>


</>
  );
};

export default Navbar;