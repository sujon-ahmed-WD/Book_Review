import { Link } from "react-router-dom";
import { getStore } from "./localStorage/localStorage";
import { useEffect, useState } from "react";
 
// use the gat Systemm.. ... . . .. ... .. .. 
const ReadBooks = () => {
  const [ReadStor , setReadSor] = useState([])

  useEffect(()=>{
    const data = getStore();
    setReadSor(data);
  },[ ])
   
  
  return (
    <div className="w-[90%]  ">
      {ReadStor.map((Data, id) => (
        <div key={id}>
          <div>
            <div className="card lg:card-side pt-2 border bg-base-100 shadow-xl">
              <div className="flex gap-8 pt-3">
                <figure>
                  <div className="lg:w-56 p-4 lg:p-0 flex Datas-center bg-[#F3F3F3] rounded-lg">
                    <img src={Data.image} alt="" />
                  </div>
                </figure>
                <div className="lg:flex-1 pt-3">
                  <h2 className=" text-2xl font-bold blacked">
                    {" "}
                    {Data.bookName}
                  </h2>
                  <h2 className="text-xl font-serif pt-3">
                    {" "}
                    By: {Data.author}
                  </h2>

                  <h2 className="flex Datas-start lg:Datas-center gap-3">
                    <span className="text-xl font-bold">Tegs: </span>
                    <div className="flex flex-wrap gap-2 lg:gap-4 Datas-center">
                      <h2 className="border rounded-3xl py-1 px-2  bg-green-300 work text-base">
                        #Magic
                      </h2>
                      <h2 className="border rounded-3xl py-1 px-2 bg-green-300 work text-base">
                        #Friendship
                      </h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <h2>{Data.yearOfPublishing}</h2>
                    </div>
                  </h2>
                  <hr className="pt-5" />
                  <div className="gap-4 flex">
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
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <h2>Publisher : {Data.publisher}</h2>
                    <div className="flex">
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
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                        />
                      </svg>
                      <h2>Page:{Data.totalPages}</h2>
                    </div>
                  </div>
                  <div className="flex gap-12 pt-8">
                    <button className="btn btn-outline rounded-3xl btn-green bg-green-300 ">
                      Catagory:{Data.category}
                    </button>
                    <button className="btn btn-outline text-black rounded-3xl btn-green bg-green-300 ">
                      Catagory:{Data.category}
                    </button>
                    <Link
                      to={`/bookdetial/${Data.bookId}`}
                      className="btn btn-outline text-black rounded-3xl btn-green bg-blue-300 "
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadBooks;
