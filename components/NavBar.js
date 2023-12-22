export default function NavBar(){
    return(
        <div>
            <nav className="navbar sticky-top bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#Menu"><h3>Menu</h3></a>
                    <a className="navbar-brand" href="#About"><h3>About Us</h3></a>
                    <a className="navbar-brand" href="#Contact"><h3>Contact Us</h3></a>
                </div>
            </nav>
        </div>
    )
}