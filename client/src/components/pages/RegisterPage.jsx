import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const register = async (e) => {
        e.preventDefault();
        // console.log(e.target[0].value);
        const response = await fetch("http://localhost:4000/register", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });
        // console.log(response);
        if (response.status === 200) {
            setRedirect(true);
            alert("registration successful");
        } else {
            alert("registration failed");
        }
    };
    if (redirect) {
        return <Navigate to={"/login"} />;
    }

    return (
        <div>
            <form className="register" onSubmit={register}>
                <h2>Register</h2>
                <input
                    type="text"
                    placeholder="Enter the username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="Enter the password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                />
                <button>Register</button>
            </form>
        </div>
    );
};
