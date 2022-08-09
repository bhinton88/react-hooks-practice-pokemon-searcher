import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm ({ updateUponNew }) {

  const [formData, setFormData] = useState({
    name: "",
    hp: 0,
    frontURL: "",
    backURL: ""
  })

  function handleChange (event){
    setFormData({
      ...formData,
      [event.target.name]:event.target.value
    })
  }

  function handleFormSubmit() {
    fetch("http://localhost:3001/pokemon",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        "name": formData.name,
        "hp": formData.hp,
        "sprites" : {
          "front": formData.frontURL,
          "back": formData.backURL
        }
      })
    })
    .then(response => response.json())
    .then(data => updateUponNew(data))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            onChange={handleChange}
          />
          <Form.Input 
            fluid 
            label="hp" 
            placeholder="hp" 
            name="hp" 
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontURL"
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backURL"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
