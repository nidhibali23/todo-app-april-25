import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();



export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);




    //Register user 
    const registerUser = async (formData) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        try {

            const checkUser = await fetch(`http://localhost:5001/users?email=${formData.email}`, { method: "GET" });
            const existingUser = await checkUser.json();

            if (existingUser.length > 0) {
                alert("email already registered, pls login")
            } else {
                const response = await fetch('http://localhost:5001/users', config);
                //console.log(response);
                const user = await response.json();
                localStorage.setItem("todouser", JSON.stringify(user))
                setUser(user)
                alert("User Registered");
                navigate("/task-list")

            }
        } catch (error) {
            console.log(error);
        }
    };

    //login user
    const loginUser = async (formData) => {
        try {

            const response = await fetch(`http://localhost:5001/users?email=${formData.email}&password=${formData.password}`, { method: "GET" });
            const user = await response.json();
            // console.log(response);
            //console.log(user);
            if (user.length > 0) {
                localStorage.setItem("todouser", JSON.stringify(user[0]))
                setUser(user[0])
                alert("logged in successfully");
                navigate("/task-list")
            } else {
                alert("email/pswd is wrong");
            }
        } catch (error) {
            console.log(error)

        }
    }


    const fetchUserDetails = async (id) => {
        try {
            const response = await fetch(`http://localhost:5001/users/${id}`, { method: "GET" })
            const details = await response.json();
            setUserDetails(details);
        } catch (error) {
            console.log(error);
        }
    }

    const updateUser = async (formData) => {
        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(formData)
        }
        try {
            const response = await fetch(`http://localhost:5001/users/${formData.id}`, config)
            alert("User updated Successfully");
            fetchUserDetails(user.id)
        } catch (error) {

        }
    }


    //check user status
    const checkUserStatus = async (email) => {
        try {
            const response = await fetch(`http://localhost:5001/users?email=${email}`)
            const user = await response.json();
            if (user.length > 0) {
                setUser(user[0])
            } else {
                localStorage.removeItem("todouser");
            }
        } catch (error) {

        }
    }



    const logout = () => {
        localStorage.removeItem("todouser");
        setUser(null);
        navigate("/login");
    }

    useEffect(() => {
        const local = JSON.parse(localStorage.getItem("todouser"));
        // console.log(local);
        if (local) {
            checkUserStatus(local.email);
        }
    }, [])


    return (
        <AuthContext.Provider value={{
            user,
            registerUser,
            loginUser,
            logout,
            fetchUserDetails,
            userDetails,
            updateUser


        }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;