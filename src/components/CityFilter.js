import React from "react";
import { Form, FormControl } from "react-bootstrap";

const CityFilter = () => {
  return (
    <Form>
      <FormControl componentClass="select" placeholder="Pick your city!">
        <option value="Washington DC">Washington DC</option>
        <option value="New York">New York</option>
      </FormControl>
    </Form>
  );
};

export default CityFilter;
