import { useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";

const DogDelete = ({deleteHandler}) => {
    const location = useLocation();
    const dog = location.state.dog

    const [choose, setChoose] = useState(false);
    const navigate = useNavigate();

    const formHandler = (e) => {
        e.preventDefault();
        console.log("CHOOSE: ", choose);
        if (choose){
            deleteHandler(dog);
        }
        navigate('/dogs');
    }

    return(
        <form onSubmit={formHandler}>
            <div>
                <label>Are you sure you want to DELETE the dog named {dog.name}?</label>
            </div>
            <button onClick={()=>{setChoose(true)}}>Yes</button>
            <button>No</button>
        </form>
    );
}

export default DogDelete;

