import React from "react";
import Header from "./features/Header/Header";

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section>
        <h2>Todos</h2>
        <Header />
      </section>
    </div>
  );
}

export default App;
