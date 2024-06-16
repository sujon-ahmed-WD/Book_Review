import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { image, tags, bookName, author, category, rating, bookId } = book;

  return (
    <Link
      to={`/books/${bookId}`}
      className="  hover:scale-105 transition hover:border-green-500     "
    >
      <div className="max-w-xs p-6 rounded-md shadow-md    ">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          {tags.map((tag,i) =>( 
            <span key={i}  className="badge badge-secondary">{tag}</span>
         ) )}
          <h2 className=" text-left text-xl font-bold tracking-wide">
            {bookName}
          </h2>
        </div>
        <p className="text-left text-xl font-smbold">By: {author}</p>
        <div className=" pt-3 flex justify-between">
          <div className="text-xl con">{category}</div>
          <div className="flex gap-2">
            <div>{rating}</div>
            <div>
              <span>
                <img src="/public/Frame.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
