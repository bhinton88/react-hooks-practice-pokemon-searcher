import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemonData, setPokemonData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(response => response.json())
    .then(data => setPokemonData(data))
  },[]) 

  function handleSetSearch (event) {
    setSearchTerm(event.target.value)   
  }

  function updateUponNew(newPokemon) {
    setPokemonData([...pokemonData, newPokemon])
  }

  const filteredPokemon = pokemonData.filter(value => value.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm updateUponNew={updateUponNew} />
      <br />
      <Search handleSetSearch={handleSetSearch} />
      <br />
      <PokemonCollection pokemonData={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
