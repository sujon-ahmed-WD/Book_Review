import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 
 
 
import Mainlayout from './layouts/Mainlayout.jsx';
import Errorpage from './Pages/Errorpage.jsx';
 
import Home from './Pages/Home.jsx';
import PageRead from './Pages/PageRead.jsx';
import ListedBook from './Pages/ListedBook.jsx';
import Books from './Component/Books.jsx';

 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    errorElement:<Errorpage/>,
    children:[
      {
       index:true,
       element:<Home/>
      },

      {
        path:'/books',
        element:<PageRead/>

      },
      {
        path:'/books',
       element:<Books/>,
       loader:()=>fetch('Book.json'),
      },

      {
      path:'/read',
       element:<ListedBook/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
