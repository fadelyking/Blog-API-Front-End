import { useState } from "react";
import NavBar from "./Navigation";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3000/user/sign-in", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setEmail("");
        setPassword("");
        setMessage("User created successfully");
        const token = resJson.token;
        localStorage.setItem("token", token);
        return resJson;
      } else {
        setMessage("Please enter valid credentials");
        const makeVisibile = document.querySelector(".hidden");
        makeVisibile.style.display = "block";
        setTimeout(() => {
          makeVisibile.style.display = "none";
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <NavBar></NavBar>
      <div className="flex items-center flex-col mt-10 gap-5">
        <div className="text-3xl p-5 font-bold mt-10">Welcome</div>
        <div className=" mb-2 bg-red-400 p-3 rounded-sm hidden ">{message}</div>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col gap-10"
          action=""
          method="post"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="drop-shadow-sm border-b-2 border-gray-500 p-2 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="drop-shadow-sm border-b-2 border-gray-500 p-2 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="mt-5 bg-purple-500 p-4 text-white rounded-xl"
          >
            Submit
          </button>
        </form>
        <div className="div">
          Don't have an account?{"  "}
          <a href="./sign-up" className="underline">
            Sign up!
          </a>
        </div>
      </div>
    </>
  );
}
