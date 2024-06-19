import Banner from "../Component/Banner";
import Books from "../Component/Books";

 

 
const Home = () => {
    return (
        <div>
             <Banner/>
             <h1 className="text-5xl mt-5 text-center font-thin">Books</h1>
             <Books/>
 
        </div>
    );
};

export default Home;