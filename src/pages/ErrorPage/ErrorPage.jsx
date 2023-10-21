import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center my-80">
            <Link to="/"><button className="btn my-5 bg-gray-800 text-white rounded-xl">Home</button></Link>
            <h1 className="text-5xl ">Oops!!!!</h1>
            <h1 className="text-3xl mt-9" >404 - Page Not Found</h1>
        </div>
    );
};

export default ErrorPage;