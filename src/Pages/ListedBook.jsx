import { Link, Outlet, useNavigate, useNavigation } from "react-router-dom";
import { useState } from "react";
import Loader from "../Component/Loader";

const ListedBook = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loader />;
  return (
    <div className="w-[90%] mx-auto">
      <div className="bg-zinc-300 h-max w-full">
        <h1 className="text-center text-5xl p-10 font-serif">Books</h1>
      </div>

      {/* tabs */}
      <div className="flex justify-start Datas-center -mx-4 overflow-x-auto overflow-y-hidden  pt-5  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <hr />
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex Datas-center flex-shrink-0 px-5 py-3 space-x-2
            ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            }  dark:border-gray-600 dark:text-gray-600`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>

          <span>Read Books</span>
        </Link>
        <Link
          to={"Wishlist"}
          onClick={() => setTabIndex(1)}
          className={`flex Datas-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? " border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
            />
          </svg>

          <span>Wishlist Books</span>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default ListedBook;
