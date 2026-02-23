import { Link } from "react-router-dom";
import {memo, useContext } from "react";
import { FavoritesContext } from "../components/FavoriteContext";

const Card = ({ item, type}) => {
    const {favorites, toggleFavorite } = useContext(FavoritesContext);
    const isFavorite = favorites.some((fav)=> fav.url === item.url);
    const id = item.url.split("/").filter(Boolean).pop();
    const typeImages = {
        starship: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0lOAMDuXBKi04nW_kR1goURYXCo85z72PHA&s",
        planet: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/devocdi-7a1e57d0-8bac-40d5-a70b-daea80cc8d57.png/v1/fill/w_1280,h_1280,q_80,strp/star_wars_planet_collection__1_by_ericwhitted_devocdi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiIvZi9kNzFlMzc5Yi0zZjA5LTQyYjItYjNmZS0yNjU0ODU5MWE3NTAvZGV2b2NkaS03YTFlNTdkMC04YmFjLTQwZDUtYTcwYi1kYWVhODBjYzhkNTcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ET1FK4Sq_z4esfH5uOXp3dlT_8g_v_gb5IOvDDIB0JU",
        person: "https://wallpapers.com/images/hd/star-wars-characters-8af29jxclp2bmqzx.jpg"
    };
    const starBackground = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGblEM5-cIg-qi-OOGyFoVBeWU1v34kf3oAQ&s";
    return (
        <div className="card h-100" style={{ 
            width: "18rem", 
            display: "flex", 
            flexDirection: "column", 
            margin: "10px",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(${starBackground})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 overflow: 'hidden'
         }}>            <img src={typeImages[type]} className="card-img-top" alt={type} loading="lazy" />
            <div className="card-body text-dark d-flex flex-column">
                <h5 className="card-title text-truncate text-warning">{item.name}</h5>
                <div className="card-text mb-3 flex-grow-1 text-white fw-bold">
                    {type === "starship" && (
                        <>
                            <p className="m-0 small">Model: {item.model}</p>
                            <p className="m-0 small">Class: {item.starship_class}</p>
                            <p className="m-0 small">Manufacturer: {item.manufacturer}</p>
                            <p className="m-0 small">Cost: {item.cost_in_credits}</p>
                        </>
                    )}
                    {type === "planet" && (
                        <>
                            <p className="m-0 small">Climate: {item.climate}</p>
                            <p className="m-0 small">Population: {item.population}</p>
                            <p className="m-0 small">Terrain: {item.terrain}</p>
                        </>
                    )}
                    {type === "person" && (
                        <>
                            <p className="m-0 small">Gender: {item.gender}</p>
                            <p className="m-0 small">Hair color: {item.hair_color}</p>
                            <p className="m-0 small">Eye color: {item.eye_color}</p>
                        </>
                    )}
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <Link to={`/details/${type}/${id}`} className="btn btn-primary">
                        Learn more!
                    </Link>
                    <button 
                    className="btn btn-light" 
                    onClick={()=>toggleFavorite(item)} 
                    style={{ color: isFavorite ? "gold" : "gray" }}
                    >
                        <i className={isFavorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
                        </button>
                </div>
            </div>
        </div>
    );
};

export default memo (Card);
