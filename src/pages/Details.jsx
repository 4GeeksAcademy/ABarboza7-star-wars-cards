import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
    const { type, id } = useParams();
    const [item, setItem] = useState(null);

    const fondoBackground =
        "https://media.istockphoto.com/id/185215907/es/foto/big-planetas-y-brillantes-estrellas-galaxia-de-espacio.jpg?s=612x612&w=0&k=20&c=oct3WTWpRbQgbs2GbQoiQ-gvddj3hpknb-2Qa3ZSVLw=";

    const starBackground =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmMxrC4jDmSch1RWTxpFKtB8VMsWtVN1VLeA&s";

    const typeImages = {
        starship:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0lOAMDuXBKi04nW_kR1goURYXCo85z72PHA&s",
        planet: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/devocdi-7a1e57d0-8bac-40d5-a70b-daea80cc8d57.png/v1/fill/w_1280,h_1280,q_80,strp/star_wars_planet_collection__1_by_ericwhitted_devocdi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiIvZi9kNzFlMzc5Yi0zZjA5LTQyYjItYjNmZS0yNjU0ODU5MWE3NTAvZGV2b2NkaS03YTFlNTdkMC04YmFjLTQwZDUtYTcwYi1kYWVhODBjYzhkNTcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ET1FK4Sq_z4esfH5uOXp3dlT_8g_v_gb5IOvDDIB0JU",

        person: "https://wallpapers.com/images/hd/star-wars-characters-8af29jxclp2bmqzx.jpg",
    };

    useEffect(() => {
        const apiTypes = { starship: "starships", planet: "planets", person: "people" };
        const apiEndpoint = apiTypes[type];

        fetch(`https://swapi.dev/api/${apiEndpoint}/${id}/`)
            .then((res) => res.json())
            .then((data) => setItem(data))
            .catch((err) => console.error("Error:", err));
    }, [type, id]);

    if (!item) return <h2 className="text-center text-white mt-5">Cargando detalles...</h2>;

    return (
        <div style={{
            minHeight: "100vh",
            backgroundImage: `url(${fondoBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
        }}>
            <div className="container p-0 rounded overflow-hidden border border-secondary shadow-lg" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url(${starBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <div className="row g-0 p-5">
                    <div className="col-md-6 text-center d-flex align-items-center justify-content-center">
                        <img src={typeImages[type]} className="card-img-top" alt={type} />
                    </div>
                    <div className="col-md-6 text-white">
                        <h1 className="display-4 text-warning">{item.name}</h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <hr className="text-danger border-2" />

                        <div className="d-flex justify-content-between text-danger text-center fw-bold">
                            {type === "starship" && (
                                <>
                                    <div>
                                        <span className="text-secondary small">MODEL</span><br />{item.model}
                                    </div>
                                    <div>
                                        <span className="text-secondary small">MANUFACTURER</span><br />{item.manufacturer}
                                    </div>
                                    <div>
                                        <span className="text-secondary small">CLASS</span><br />{item.starship_class}
                                    </div>
                                    <div>
                                        <span className="text-secondary small">PASSENGERS</span><br />{item.passengers}
                                    </div>
                                    <div>
                                        <span className="text-secondary small">COST</span><br />{item.cost_in_credits}
                                    </div>
                                </>
                            )}

                            {type === "planet" && (
                                <>
                                    <div>
                                        <span className="text-secondary small">CLIMATE</span><br />{item.climate}
                                    </div>
                                    <div>
                                        <span className="text-secondary small">TERRAIN</span><br />{item.terrain}
                                    </div>
                                    <div>
                                        <span className="text-secondary small">GRAVITY</span><br />{item.gravity}
                                    </div>
                                    <div>
                                        <span className="text-secondary small">DIAMETER</span><br />{item.diameter}
                                    </div>
                                    <div>
                                        <span className="text-secondary small">POPULATION</span><br />{item.population}
                                    </div>
                                </>
                            )}

                            {type === "person" && (
                                <>
                                    <div>
                                        <span className="text-secondary small">GENDER</span><br />{item.gender}
                                    </div>
                                    <div>
                                        <span className="text-secondary small">YEAR OF BIRTH</span><br />{item.birth_year}
                                    </div>
                                    <div>
                                        <span className="text-secondary small">HEIGHT</span><br />{item.height}
                                    </div>
                                    <div>
                                        <span className="text-secondary small">EYE</span><br />{item.eye_color}
                                    </div>
                                    <div>
                                        <span className="text-secondary small">HAIR</span><br />{item.hair_color}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};