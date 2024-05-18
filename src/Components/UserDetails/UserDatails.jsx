import { useLoaderData, useNavigate} from "react-router-dom";

const UserDatails = () => {
    const user = useLoaderData()
    const navigate = useNavigate()
    const {name, email}=user;

    const handleGoBack=()=>{
        navigate(-1);
    }
    return (
        <div>
            <h4>User Details</h4>
            <p> User Name: {name} </p>
            <p>User Email: {email}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDatails;