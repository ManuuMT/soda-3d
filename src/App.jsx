import { Suspense } from "react";
import Scene from "./components/Scene";
import "./App.css";
import Labels from "./components/Labels";

function App() {
  return (
    <div id="bg_container" className="container">
      <div className="wrapper">
        <Suspense fallback={null}>
          <Labels />
          <Scene />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
