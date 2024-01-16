import NavBar from "./Navigation";

export default function SignIn() {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex items-center flex-col mt-10 gap-5">
        <div className="text-3xl p-5 font-bold mt-10">Welcome</div>
        <form className=" flex flex-col gap-10" action="" method="post">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="drop-shadow-sm border-b-2 border-gray-500 p-2 outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="drop-shadow-sm border-b-2 border-gray-500 p-2 outline-none"
          />
          <button
            type="submit"
            className="mt-5 bg-purple-500 p-4 text-white rounded-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
