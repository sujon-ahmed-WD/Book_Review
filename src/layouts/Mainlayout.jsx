import { Outlet } from "react-router-dom";
import Nav from "../Component/Nav";

 
const Mainlayout = () => {
    return (
        
      <div>
            <div className="h-13"> <Nav/></div>
           <div className="min-h-[calc(100vh-64px)]">  <Outlet/></div>
      </div>
         
         
    );
};

export default Mainlayout;