import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavBar from "./Navigation";
import Home from "./Homepage";

function App() {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    function getPosts() {
      fetch("http://localhost:3000/", { mode: "cors" })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((json) => setBlogs(json))
        .catch((error) => console.log(error));
    }

    getPosts();
  }, []);
  if (blogs) {
    return (
      <>
        <NavBar></NavBar>
        <Home blogs={blogs}></Home>
      </>
    );
  }
}

export default App;
