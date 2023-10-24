import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {

    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        fetch('http://localhost:3000/product', {

        })
        .then(res => res.json())
        .then(data => {console.log(data);})
    },[])

    return (
        <div>
            <h1>hoi;hoi {id}</h1>
        </div>
    );
};

export default Details;