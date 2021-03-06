import React from "react";
import Header from "./features/Header/Header";
import TodoList from "./features/todos/TodoList";
import Footer from "./features/Footer/Footer";
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
        <TodoList />
        <Footer />
      </section>
    </div>
  );
}

export default App;
