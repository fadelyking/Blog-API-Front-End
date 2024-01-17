import { useEffect, useState } from "react";
import NavBar from "./Navigation";

function SignUp() {
  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [message, setMessage] = useState("");

  function handleSubmit() {}
  return (
    <>
      <NavBar></NavBar>
      <div className="flex items-center flex-col mt-10 gap-5">
        <div className="text-3xl p-5 font-bold">
          Join the bloggers community
        </div>
        <div className=" mb-2 bg-red-400 p-3 rounded-sm hidden ">{message}</div>
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col gap-10"
          action=""
          method="post"
        >
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="drop-shadow-sm border-b-2 border-gray-500 p-2 outline-none"
            value={credentials.first_name}
            onChange={(e) =>
              setCredentials({ ...credentials, first_name: e.target.value })
            }
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="drop-shadow-sm border-b-2 border-gray-500 p-2 outline-none"
            value={credentials.last_name}
            onChange={(e) =>
              setCredentials({ ...credentials, last_name: e.target.value })
            }
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="drop-shadow-sm border-b-2 border-gray-500 p-2 outline-none"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="drop-shadow-sm border-b-2 border-gray-500 p-2 outline-none"
            value={credentials.password}
            onChange={(e) =>
              setPassword({ ...credentials, password: e.target.value })
            }
          />
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            className="drop-shadow-sm border-b-2 border-gray-500 p-2 outline-none"
            value={credentials.confirm_password}
            onChange={(e) =>
              setPassword({ ...credentials, password: e.target.value })
            }
          />
          <button
            type="submit"
            className="mt-5 bg-purple-500 p-4 text-white rounded-xl"
          >
            Submit
          </button>
        </form>
        <div className="div">
          Already have an account?{"  "}
          <a href="./sign-in" className="underline">
            Sign in!
          </a>
        </div>
      </div>
    </>
  );
}

export default SignUp;
