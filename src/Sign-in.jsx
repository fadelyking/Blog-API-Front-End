import NavBar from "./Navigation";

export default function SignIn() {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex items-center flex-col">
        <div className="text-3xl p-5 font-bold mt-6">Welcome</div>
        <form className=" flex flex-col" action="" method="post">
          <label for="Email">Email:</label>
          <input type="email" name="email" />
          <label for="Password">Password:</label>
          <input type="password" name="password" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}
