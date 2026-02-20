import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="card" style={{ width: "18rem",display: "inline-block", margin: "10px"  }}>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg'} className="card-img-top" alt="Rigo" />  <div className="card-body text-dark">
                    <h5 className="card-title text-truncate">{props.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </>
    ) 
}

export default Card;