import { useState } from "react";
import Panel from "./components/Panel";
import Pop from "./components/Popover";

function App() {
  const [clients, setClients] = useState([
    { nome: "", documento: "", sexo: "", id: "" },
  ]);
  return (
    <div className="bg-zinc-900 h-screen w-full px-36 py-12">
      <Pop setClients={setClients} />
      <Panel clients={clients} setClients={setClients} />
    </div>
  );
}

export default App;
