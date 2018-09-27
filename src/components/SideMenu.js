import React from 'react';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

const SideMenu = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <DropdownButton title="Trips" id="bg-vertical-dropdown-1">
          <MenuItem eventKey="1">trip name 1</MenuItem>
          <MenuItem eventKey="1">trip name 2</MenuItem>
        </DropdownButton>
        <Button>Add Trip</Button>
        <Button>Edit Trip</Button>
        <Button>Delete Trip</Button>
        <Button>Add Place</Button>
      </ButtonGroup>
    </div>
  )
}

export default SideMenu;
