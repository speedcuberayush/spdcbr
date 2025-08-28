import React, { useEffect, useState } from "react";
import Landing from "./Components/Pages/Landing";
import "./App.css";
import { Preloader } from "./Components/Pages/Preloader";

export function App() {
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(true); // after 8 seconds, show Landing
    }, 8000);

    return () => clearTimeout(timer); // cleanup
  }, []);

  return <div className="app">{showLanding ? <Landing /> : <Preloader />}</div>;
}

export default App;
