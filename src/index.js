import {createRoot} from "react-dom/client";
import Home from "./home";
import About from "./about";
import Contact from "./contact";

const root = createRoot (document.getElementById("root"));

function App() {
    const path = window.location.pathname;
  
    switch (path) {
      case "/":
        return <Home />;
      case "/About":
        return <About />;
      case "/Contact":
        return <Contact />;
      default:
        return <h1>Page Not Found</h1>;
    }
  }

  root.render(
    <>
      {" "}
      <App />{" "}
    </>
  );