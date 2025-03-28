import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router";
import Characters from "./pages/Characters";

function App() {
  return (
    <Router>
        <Nav />
        <Header />
        <Characters />
    </Router>
  );
}

export default App;
