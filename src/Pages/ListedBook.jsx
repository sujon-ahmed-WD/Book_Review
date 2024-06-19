import { Link, Outlet, useNavigate, useNavigation } from "react-router-dom";
 import { useState } from "react";
import Loader from "../Component/Loader";

const ListedBook = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const navigation=useNavigation()

  if(navigation.state ==='loading') return <Loader/>
  return (
    <div>
      <div className="bg-zinc-300 h-max w-full">
        <h1 className="text-center text-5xl p-10 font-serif">Books</h1>
      </div>
     
      {/* tabs */}
      <div className="flex justify-start items-center -mx-4 overflow-x-auto overflow-y-hidden  pt-5  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
        <hr />
        <Link
          to=''
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2
            ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            }  dark:border-gray-600 dark:text-gray-600`}
        >
          <span>Read Books</span>
        </Link>
        <Link
          to={'Wishlist'}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? " border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <span>Wishlist Books</span>
        </Link>
      </div>
      <Outlet/>
    </div>
  );
};

export default ListedBook;
