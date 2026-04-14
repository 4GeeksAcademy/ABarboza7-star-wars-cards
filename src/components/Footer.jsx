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
            <p className="mb-0">
                Made with <i className="fa fa-heart text-danger" /> by Abraham Barboza
            </p>
        </footer>
    );
};
