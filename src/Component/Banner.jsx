import { Link, NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero  pt-4 p-3 rounded-[20px] bg-base-200">
        <div className="hero-content   justify-end lg:flex-row-reverse">
          <img src="/public/pngwing 1.png" />
          <div>
            <h1 className=" flex justify-start text-5xl font-bold">
              Books to freshen
              <span className="text-5xl font-bold bg-gradient-to-r from-green-700 via-green-500 to-blue-400 text-transparent bg-clip-text animate-gradient">
                up your bookshelf
              </span>
            </h1>
            <div className="flex  pt-3">
              <Link
                to="/books"
                class="relative pt-3   rounded px-5 py-2.5 overflow-hidden group bg-green-500   hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">Listed Books page</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
