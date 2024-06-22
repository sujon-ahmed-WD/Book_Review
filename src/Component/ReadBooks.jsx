import { Link, useLoaderData } from "react-router-dom";
import { getStore } from "./localStorage/localStorage";
import { ColorRing } from "react-loader-spinner";
import { Simulate } from "react-dom/test-utils";
  // Adjust the path if needed

const ReadBooks = () => {
  const ReadStor = getStore();
  console.log(ReadStor);
  return (
    <div className="w-[90%]  ">
      {ReadStor.map((item, id) => (
        <h2 key={id}>
            
        </h2>
      ))}
    </div>
  );
};

export default ReadBooks;
