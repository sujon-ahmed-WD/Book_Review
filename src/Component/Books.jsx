 
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";

 
const Books = () => {
 
    const[datas,setDatas]=useState([]);

     useEffect(()=>{
        fetch("Book.json")
       .then(res=>res.json())
       .then(datas=>{
      
       setDatas(datas)
       })
       },[])

       console.log(datas)
    
    return (
        <div className="grid grid-cols-3 hover:">
            {
                datas.map((book)=><BookCard
                key={book.id}
                book={book} 
                ></BookCard>)
            }
        </div>
    
    );
};

export default Books;