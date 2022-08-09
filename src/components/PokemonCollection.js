import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonData }) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonData.map(value => 
        <PokemonCard key={value.id} pokemon={value} />)}
    </Card.Group>
  );
}

export default PokemonCollection;
