import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { image, tags, bookName, author, category, rating } = book;
  return (
    <Link
    to='/'
    className="  hover:scale-105 transition hover:border-green-500     "
    >
      <div className="max-w-xs p-6 rounded-md shadow-md    ">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
            { tags
        }
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Nam maximus purus
          </h2>
        </div>
        <p className="dark:text-gray-800">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p>
      </div>
    </Link>
  );
};

export default BookCard;
