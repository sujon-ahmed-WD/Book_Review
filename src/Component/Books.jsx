 
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

 
const Books = () => {

  
 
    const[datas,setDatas]=useState([]);

     useEffect(()=>{
        fetch("/book.json")
       .then(res=>res.json())
       .then(data=>{setDatas(data)
       })
       },[])

       console.log(datas)
    
    return (
        <div className="grid grid-cols-3 hover:">
            {
                datas.map((book)=><BookCard
                key={book.bookId}
                book={book} 
                ></BookCard>)
            }
        </div>
    
    );
};

export default Books;