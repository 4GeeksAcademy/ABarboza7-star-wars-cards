import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "./Card.jsx";
export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	const [starships, setStarships] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [people, setPeople] = useState([]);
	const [loading, setLoading] = useState(true);

	const [favorites, setFavorites] = useState([]);

	const toggleFavorite = (item) => {
		setFavorites((prev) =>
			prev.some((fav) => fav.url === item.url)
				? prev.filter((fav) => fav.url !== item.url)
				: [...prev, item]
		);
	};

	const starBackground = "https://media.istockphoto.com/id/185215907/es/foto/big-planetas-y-brillantes-estrellas-galaxia-de-espacio.jpg?s=612x612&w=0&k=20&c=oct3WTWpRbQgbs2GbQoiQ-gvddj3hpknb-2Qa3ZSVLw=";

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [resShips, resPlanets, resPeople] = await Promise.all([
					fetch("https://swapi.dev/api/starships/"),
					fetch("https://swapi.dev/api/planets/"),
					fetch("https://swapi.dev/api/people/")
				]);

				const dataShips = await resShips.json();
				const dataPlanets = await resPlanets.json();
				const dataPeople = await resPeople.json();

				setStarships(dataShips.results);
				setPlanets(dataPlanets.results);
				setPeople(dataPeople.results);
			} catch (error) {
				console.error("Error cargando la API:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) return <h1 className="text-center">Cargando Galaxia...</h1>;



	return (
		<div className="container-fluid min-vh-100 py-5 px-5"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${starBackground})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
				color: 'white'
			}}>


			<h1 className="text-danger text-center fw-bold mt-4 mb-4"
				style={{ textShadow: "2px 2px 4px #000" }}>STARSHIPS
			</h1>
			<div className="d-flex flex-nowrap overflow-auto pb-4 custom-scrollbar">
				{starships.map((nave) => (
					<div key={nave.url} className="me-3" style={{ minWidth: "18rem" }}>
						<Card
							item={nave}
							type="starship"
							isFavorite={favorites.some((fav) => fav.url === nave.url)}
							toggleFavorite={toggleFavorite}
						/>
					</div>
				))}
			</div>

			<h1 className="text-danger text-center fw-bold mt-4 mb-4"
				style={{ textShadow: "2px 2px 4px #000" }}>PLANETS</h1>
			<div className="d-flex flex-nowrap overflow-auto pb-4 custom-scrollbar">
				{planets.map((planet) => (
					<div key={planet.url} className="me-3" style={{ minWidth: "18rem" }}>
						<Card
							item={planet}
							type="planet"
							isFavorite={favorites.some((fav) => fav.url === planet.url)}
							toggleFavorite={toggleFavorite}
						/>
					</div>
				))}
			</div>

			<h1 className="text-danger text-center fw-bold mt-4 mb-4" 
			style={{ textShadow: "2px 2px 4px #000" }}>CHARACTERS</h1>			
			<div className="d-flex flex-nowrap overflow-auto pb-4 custom-scrollbar">
				{people.map((person) => (
					<div key={person.url} className="me-3" style={{ minWidth: "18rem" }}>
						<Card
							item={person}
							type="person"
							isFavorite={favorites.some((fav) => fav.url === person.url)}
							toggleFavorite={toggleFavorite}
						/>
					</div>
				))}
			</div>
		</div>
	);
};