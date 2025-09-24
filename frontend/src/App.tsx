import { useState } from "react";
import { Button } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button>This is a random button</Button>
    </>
  );
}

export default App;
