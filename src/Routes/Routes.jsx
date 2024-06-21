import { createBrowserRouter } from "react-router-dom";
import Books from "../Component/Books";
import BookDetalis from "../Pages/BookDetalis";
import Errorpage from "../Pages/Errorpage";
import Home from "../Pages/Home";
import ListedBook from "../Pages/ListedBook";
import Pagetoread from "../Pages/Pagetoread";
import Mainlayout from "../layouts/Mainlayout";
import ReadBooks from "../Component/ReadBooks";
import Wislist from "../Component/Wislist";
import LineChart from "../Component/LineChart";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      errorElement: <Errorpage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
  
        {
          path: "/books",
          element: <ListedBook/>,
          children:[
            {
              index:true,
              element:<ReadBooks/>
            },
            {
              path:'Wishlist',
              element:<Wislist/>
            }
          ]
        },
        {
          path: "/books",
          element: <Books />,
          loader: () => fetch("/book.json"),
        },
  
        {
          path: "/bookdetial/:id",
          loader:()=>fetch(`/public/book.json`),
          element: <BookDetalis />,
          
        },
  
        {
          path: "/read",
          element: <Pagetoread/>,
          children:[
            {
              index:true,
              loader:()=>fetch(`/public/book.json`),
              element:<LineChart/> 
            }
          ]
        },
      ],
    },
  ]);