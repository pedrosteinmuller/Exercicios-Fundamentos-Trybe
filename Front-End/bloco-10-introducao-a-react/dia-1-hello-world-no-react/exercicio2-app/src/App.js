// import React from "react";
// import "./App.css";
// import Header from "./Header";

// const Task = (value) => {
//   return <li key={value}>{value}</li>;
// };

// const tarefas = [
//   "Acordar",
//   "Café",
//   "Estudar",
//   "Treinar",
//   "Brincar com o cachorro",
//   "Almoçar",
//   "Aula Trybe",
// ];

// class App extends React.Component {
//   render() {
//     return (
//       <ul>{ tarefas.map((item) => Task(item)) }</ul>
//     );
//   }
// }

// export default App;

import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
