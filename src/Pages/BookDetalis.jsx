import { useEffect, useState } from "react";

 
const BookDetalis = () => {
    const[datas , setDatas]=useState([]);

    console.log(datas)

    useEffect(()=>{
       fetch("/book.json")
      .then(res=>res.json())
      .then(data => {setDatas(data)})
      },[])

     
    return (
        <div>
            <h1>This is book Details Page Data :{datas.length}</h1>
        </div>
    );
};

export default BookDetalis;