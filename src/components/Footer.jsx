import React from "react";

export const Footer = () => {
    // La constante debe ir dentro de las llaves del componente
    const starBackground = "https://www.shutterstock.com/image-vector/astrology-horizontal-star-universe-background-260nw-2553208135.jpg";

    return (
        <footer 
            className="footer mt-auto py-4 text-center text-light" 
            style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${starBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderTop: '2px solid #dc3545' // Cambiado a Top para que divida el cuerpo del footer
            }}
        >
            <p className="mb-2">
                Check the <a target="_blank" href="https://4geeks.com/docs/start/start-react-advanced" className="text-warning text-decoration-none">template documentation</a> <i className="fa-solid fa-file"></i> for help.
            </p>
            <p className="mb-0">
                Made with <i className="fa fa-heart text-danger" /> by{" "}
                <a href="http://www.4geeksacademy.com" className="text-warning text-decoration-none fw-bold">4Geeks Academy</a>
            </p>
        </footer>
    );
};
