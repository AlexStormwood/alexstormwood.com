import { useEffect, useState } from "react";


export default function RandomPokemonFetcher() {

	let [name, setName] = useState("");
	let [spriteUrl, setSpriteUrl] = useState("");

	async function getNewPokemon() {
		try {


			let randomPokemonId = Math.floor(Math.random() * 1025) + 1;
			let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomPokemonId);
			let data = await response.json();

			if (data.name && data.sprites.front_default) {
				setName(data.name);
				setSpriteUrl(data.sprites.front_default);
			} else {
				throw new Error("Something went wrong retrieving a Pokemon from PokeAPI.")
			}

		} catch (error) {
			console.warn(error.message);
		}
	}

	useEffect(() => {
		getNewPokemon();
	}, []);

	return (
		<div className="randomPokemon" style={{display:"flex", justifyContent: "center", flexDirection: "column", width: "100%", alignItems:"center"}}>
			{(name && spriteUrl) 
			?
				<div style={{backgroundColor:"var(--theme-700)", padding: "5%", textAlign:"center"}} >
					<p style={{"text-transform":"capitalize"}} >{name}</p>
					<img alt="A Pokemon sprite image." src={spriteUrl} />
				</div>
			:
				<div>
					Loading Pokemon...
				</div>	
			}
			<button onClick={getNewPokemon}>Get a new Pokémon!</button>
		</div>
	)
}