import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { image, tags, bookName, author, category, rating, bookId } = book;
 

  return (
    <Link
      to={`/bookdetial/${bookId}`}
      className=" hover:scale-105 gap-2 transition w-full  hover:border-green-500 "
    >
      <div className="  w-[80%] mx-auto p-6 rounded-md shadow-md  gap-3   ">
<div className="h-72 border">
          <img src={image} className="   h-full mx-auto  w-full    object-cover object-center   rounded-md   dark:bg-gray-500"
          />
</div>
        <div className="mt-6 mb-2 pt-4  ">
          {tags.map((tag,i) =>( 
            <span key={i}  className="gap-4 flax justify-start text-green-500 badge bg-red">{tag}</span>
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
