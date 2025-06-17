import React from "react";
import LoadingScreen from "./components/common/LoadingScreen";
import Navbar from "./components/common/Navbar";
import "./components/style/navbar-compact.css";
import "./components/style/loading-screen.css";

function App() {
  return (
    <div>
      <Navbar />
      <LoadingScreen />
      {/* ...existing code... */}
    </div>
  );
}

export default App;