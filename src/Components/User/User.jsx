import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone}=user;

    const navigate = useNavigate();

    const userStyle={
        border: '5px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }
    const handleShowDetails = () =>{
        navigate(`/user/${id}`);
    }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link><br>
            </br>
            <button onClick={handleShowDetails}>Click Show Details</button>
        </div>
    );
};

export default User;