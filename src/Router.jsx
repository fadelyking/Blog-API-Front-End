import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./Sign-in";
import Home from "./Homepage";
import { useEffect, useState } from "react";
import SignUp from "./Sign-up";
export default function Router() {
  const [blogs, setBlogs] = useState();
  const [users, setUsers] = useState();

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

    function getUsers() {
      fetch("http://localhost:3000/user/sign-up", { mode: "cors" })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((json) => setUsers(json))
        .catch((error) => console.log(error));
    }

    getPosts();
    getUsers();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home blogs={blogs} />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}
