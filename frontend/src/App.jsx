import { useState } from "react";
import "./App.css";
import Advertisements from "./components/Advertisements/Advertisements";
import Navigation from "./components/Navigation/Navigation";
import NewAdvertisement from "./components/NewAdvertisement/NewAdvertisement";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="app">
      <Navigation setShowForm={setShowForm} showForm={showForm} />

      <Advertisements />

      {showForm && <NewAdvertisement setShowForm={setShowForm} />}
    </div>
  );
}

export default App;
