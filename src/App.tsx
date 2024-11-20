import { useState } from "react";
import QrReader from "./components/QrReader";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [openQr, setOpenQr] = useState<boolean>(false);
  return (
    <div>
      <Button onClick={() => setOpenQr(!openQr)}>
        {openQr ? "Close" : "Open"} QR Scanner
      </Button>
      {openQr && <QrReader />}
    </div>
  );
}

export default App;
