import React from "react";
import { Form, FormControl } from "react-bootstrap";

const CityFilter = ({ handleFormFilterChange, cities }) => {
  return (
    <Form>
      <FormControl
        componentClass="select"
        onChange={e => handleFormFilterChange(e.target.value)}
      >
        <option value="">Select a city</option>
        {cities.map(city => (
          <option value={city.name} key={city.id}>
            {city.name}
          </option>
        ))}
      </FormControl>
    </Form>
  );
};

export default CityFilter;
