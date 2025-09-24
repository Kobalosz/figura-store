import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Router, Routes, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div> Home</div>
      <ButtonGroup>
        <Button>Home</Button>
        <Button>Create</Button>
      </ButtonGroup>
    </nav>
  );
};

export default Navbar;
