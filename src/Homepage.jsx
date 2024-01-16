import { v4 as uuidv4 } from "uuid";
import NavBar from "./Navigation";
export default function Home({ blogs }) {
  if (blogs) {
    return (
      <>
        <NavBar></NavBar>
        <div className="flex items-center flex-col">
          <div className="text-xl p-5 font-bold mt-4">Trending</div>
          <div className="grid grid-cols-3 gap-40 mt-10">
            {blogs.posts.map((post) => (
              <div key={post._id} className=" col-auto">
                <li className=" list-none font-bold mt-2">{post.title}</li>
                <li className=" list-none text-xs">
                  {post.user.first_name + " " + post.user.last_name}
                </li>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
