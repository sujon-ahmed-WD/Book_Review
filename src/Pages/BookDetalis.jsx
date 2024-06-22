import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getStore, getwish } from "../Component/localStorage/localStorage";
import { select } from "d3";
import { stringify } from "postcss";
import { to } from "react-spring";

const BookDetalis = () => {
  const books = useLoaderData();
  // console.log(books);
  const { id } = useParams();
  // const idInt = parseInt(id);
  const selectedBook = books?.find((book) => book.bookId == id);

  const {
    bookName,
    bookId,
    category,
    image,
    publisher,
    rating,
    tags,
    author,
    yearOfPublishing,
    review,
    totalPages,
  } = selectedBook;

  const ReadHandler = (selected) => {
    const getRead = getStore();
    const findCard = getRead.find(
      (card) => card.bookId === selectedBook.bookId
    );
    if (findCard) {
      return toast.error("existed!! Already Read");
    }
    const store = [...getRead, selected];
    // ...  amier data  golo alda kora jono ...

    const value = JSON.stringify(store);

    localStorage.setItem("readCard", value);
    toast.success("Successfully!!  Add Read");
  };

  // WisList Work kora holo ............

  // const WishHandler = (Selected) => {
  //   const getWhish = getwish();
  //   const getRead = getStore();
  //   const findCard = getRead.find((card) => card.bookId === selectedBook.bookId);
  //   const findwish=getWhish.find((item)=>item.bookId ===selectedBook.bookId)
  //   if(findCard)
  //     {
  //       return toast.error("existed!! Already Read")
  //     }
  //     if(findwish){
  //       return toast.error("")
  //     }
  // };

  const WishHandler = (Selected) => {
    // Step 1: চেক করুন 'Selected' ভ্যালিড কিনা

    const getWhish = getwish();
    const stord = getStore();

    const findCard = stord
      ? stord.find((Card) => Card.bookId === Selected.bookId)
      : undefined;

    if (findCard) {
      toast.error("existed!! Already Read");
      return;
      // ফাংশন থেকে বের হয়ে আসে
    }

    // Step 5: উইশলিস্টে বইটি আছে কিনা খুঁজুন
    const findwish = getWhish
      ? getWhish.find((item) => item.bookId === Selected.bookId)
      : undefined;

    // Step 6: যদি উইশলিস্টে থাকে, যোগ না করুন
    if (findwish) {
      toast.error("existed!! Already Wishlist");
      return; // ফাংশন থেকে বের হয়ে আসে
    }

    // Step 7: নতুন উইশলিস্ট প্রস্তুত করুন এবং সেভ করুন
    const existingWishes = getWhish || [];
    const updatedWishes = [...existingWishes, Selected];
    const wishValue = JSON.stringify(updatedWishes);
    localStorage.setItem("wishCard", wishValue);
    toast.success("Successfully!! Wishlist added");
  };

  return (
    <div className="">
      <div className="card card-side flex flex-col md:flex-row shadow-xl w-[90%] mx-auto">
        <figure className="w-1/3">
          <img
            className="w-[475px] h-[564px] bg-base-300 rounded-xl mb-7 mt-7 ml-9 p-11"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body flex-1">
          <h2 className="card-title text-3xl playfair">{bookName}</h2>
          <p>By: {author}</p>
          <hr className="h- mt- mb-" />
          <p className="text-xl">{category}</p>
          <hr className="h-2 mt- mb-" />
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div> 
          <p>
            <span className="font-bold work">Review: </span>
            {review}
          </p>

          <div className="flex gap-2">
            <span className="font-bold work">Tag: </span>
            <ul className="flex gap-4   work text-[#23BE0A]">
              {tags?.map((tag, id) => (
                <li key={id} className="bg-base-200 px-2 rounded-lg">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <hr className="h-2 mt- mb-" />
          <div>
            <p>
              Number of Pages: <span className="font-bold">{totalPages}</span>
            </p>
          </div>
          <p>
            Publisher: <span className="font-bold">{publisher}</span>
          </p>
          <p>
            Year of Publishing:{" "}
            <span className="font-bold">{yearOfPublishing}</span>
          </p>
          <p>
            Rating: <span className="font-bold">{rating}</span>
          </p>
          <div className="card-actions gap-3 mt-2 ">
            <button
              onClick={() => ReadHandler(selectedBook)}
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Read
              </span>
              <span className="relative invisible">Read</span>
            </button>
            <button
              onClick={() => WishHandler(selectedBook)}
              className="btn btn-info"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BookDetalis;
