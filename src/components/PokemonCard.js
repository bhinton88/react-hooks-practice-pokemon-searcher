import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {

  const{name, hp, sprites} = pokemon
  const [toggleSprite, setToggleSprite] = useState(true)

  function changeSprite() {
    setToggleSprite(toggleSprite => !toggleSprite)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img
            onClick={changeSprite}
            src={toggleSprite ? sprites.front : sprites.back} 
            alt="oh no!" 
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
