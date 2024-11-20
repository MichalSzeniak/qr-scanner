import { useState } from "react";
import QrReader from "./components/QrReader";
import "./App.css";

function App() {
  const [openQr, setOpenQr] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setOpenQr(!openQr)}>
        {openQr ? "Close" : "Open"} QR Scanner
      </button>
      {openQr && <QrReader />}
    </div>
  );
}

export default App;
