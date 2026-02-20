import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "./Card.jsx";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	const [starships, setStarships] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [people, setPeople] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const [resShips, resPlanets, resPeople] = await Promise.all([
					fetch("https://swapi.dev/api/starships"),
					fetch("https://swapi.dev/api/planets"),
					fetch("https://swapi.dev/api/people")
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
		<div className="container-fluid mt-5 px-5">
			<h1 className="text-danger">NAVES</h1>
			<div className="d-flex flex-nowrap overflow-auto pb-4 custom-scrollbar">
				{starships.map((nave) => (
					<div key={nave.url} className="me-3" style={{ minWidth: "18rem" }}>
						<Card name={nave.name} />
					</div>
				))}
			</div>

			<h1 className="text-danger mt-4">PLANETAS</h1>
			<div className="d-flex flex-nowrap overflow-auto pb-4 custom-scrollbar">
				{planets.map((planet) => (
					<div key={planet.url} className="me-3" style={{ minWidth: "18rem" }}>
						<Card name={planet.name} />
					</div>
				))}
			</div>

			<h1 className="text-danger mt-4">PERSONAJES</h1>
			<div className="d-flex flex-nowrap overflow-auto pb-4 custom-scrollbar">
				{people.map((person) => (
					<div key={person.url} className="me-3" style={{ minWidth: "18rem" }}>
						<Card name={person.name} />
					</div>
				))}
			</div>

		</div>
	);
};