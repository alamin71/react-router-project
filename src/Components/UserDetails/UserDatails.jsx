import { useLoaderData } from "react-router-dom";

const UserDatails = () => {
    const user = useLoaderData()
    const {name, email}=user;
    return (
        <div>
            <h4>User Details</h4>
            <p> User Name: {name} </p>
            <p>User Email: {email}</p>
            <p></p>
        </div>
    );
};

export default UserDatails;