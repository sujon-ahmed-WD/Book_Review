import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 

const BookDetalis = () => {
  const { bookId } = useParams();

  const [data, setData] = useState([]);

//  tosted add

 const readtost=()=>{ toast('you have  Readlist done')}


  useEffect(() => {
    fetch("/book.json")
      .then((res) => res.json())
      .then((data) => {
        const singlebook = data.find((item) => item.bookId == bookId);
        setData(singlebook);
      });
  }, [bookId]);

  // handle
  const bookread=[]
  console.log(bookread)
  const handleread=(id)=>{
      bookread.push(id)
    localStorage.setItem('readbook', JSON.stringify(id));

    console.log(id)
  }

  return (
 
    <div>
      <div className="card lg:card-side bg-base-100  ">
        <figure className="w-full h-auto">
          <img src={data.image} alt="Album" />
        </figure>
        <div className="card-body text-left">
          <h2 className="text-4xl font-serif">{data.bookName}</h2>
          <h2
            className=" pt-2
    text-xl font-medium"
          >
            By:{data.author}
          </h2>
          <hr />
          Dystopian :{data.category}
          <hr />
          <h1 className=" pt-2text-xl font-bold text-black">
            Review:<span className="text-sm font-mono">{data.review}</span>
          </h1>
          <h1 className="pt-2 text-xl font-bold">
            Teg :{" "}
            <span className="gap-4 text-green-500 badge bg-red">
              {data.tags}
            </span>
          </h1>
          <hr className="pt-4" />
          {/* {(data.tags).map((tag,i) =>( 
            <span key={i}  className="gap-4 text-green-500 badge bg-red">{tag}</span>
         ) )} */}
          <h4 className="font-smbold">Number of Pages : {data.totalPages}</h4>
          <h4 className="font-smbold">Publisher :{data.publisher} </h4>
          <h4 className="font-smbold">
            Year of Publishing :{data.yearOfPublishing}
          </h4>
          <h4 className="font-smbold">Rating :{data.rating}</h4>
          <div className="card-actions ">
            
            <a

            onClick={()=>handleread(data.bookId)}
              href="#_"
              
              
              className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-green-600 transition duration-300 ease-out border-2 border-green-500 rounded-full shadow-md group"
            >
              
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>

              <span className="  text-green-600">Read</span>
              
            </a>
      
           
            <button   onClick={readtost}   className="btn btn-accent">Wishlist</button>
            <ToastContainer />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetalis;
