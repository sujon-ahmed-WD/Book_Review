import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip } from 'recharts';

const LineChart = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
     
      fetch('/public/book.json')
        .then(res  =>res .json() )
        .then(data => {
          // Simplify data to include only name and pages properties
          const simplifiedData = data.map(book => ({
            name: book.bookName,
            pages: book.totalPages,
          }));
          setBooks(simplifiedData);
        })
 
   
      },[]);
   
  return (
    <div>
 

      <h2>Bar Chart</h2>
      <BarChart  width={1200} height={600} data={books}>
        <XAxis dataKey="name"  />
        <YAxis fill=' #ff0000' />
        <Tooltip   />
        <Legend />
        <Bar dataKey="pages" fill="#00FF00"  />
      </BarChart>

    </div>
  );
 };
 
 export default LineChart;