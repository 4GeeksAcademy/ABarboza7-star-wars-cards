import { Link } from "react-router-dom";

export const Navbar = () => {
    const starBackground = "https://www.shutterstock.com/image-vector/astrology-horizontal-star-universe-background-260nw-2553208135.jpg";

    return (
        <nav className="navbar navbar-dark shadow-lg" 
             style={{ 
                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${starBackground})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 borderBottom: '2px solid #dc3545'
             }}>
            <div className="container py-2">
                <Link to="/">
                    <img
                        src="https://graffica.info/wp-content/uploads/2016/08/logo-actual-star-wars.jpg"
                        alt="Star Wars Logo"
                        style={{ height: "50px", width: "auto"}} 
                        className="navbar-brand mb-0"
                    />
                </Link>
                
                <div className="ml-auto d-flex align-items-center">
                    {/* Botón de favoritos ENLAZAR CON ME GUSTA */}
                    <div className="dropdown">
                        <button className="btn btn-dark dropdown-toggle fw-bold" type="button" data-bs-toggle="dropdown">
                            Favorites <span className="badge bg-secondary ms-1">0</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end bg-dark border-secondary">
                            <li><span className="dropdown-item text-muted small">(Empty)</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
