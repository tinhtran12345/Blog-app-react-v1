import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export const Header = () => {
    const { userInfo, setUserInfo } = useContext(UserContext);
    useEffect(() => {
        fetch("http://localhost:4000/profile", {
            credentials: "include",
        }).then((response) => {
            response.json().then((userInfo) => {
                setUserInfo(userInfo);
            });
        });
        return () => {
            setUserInfo(null);
        };
    }, [setUserInfo]);

    const logout = () => {
        fetch("http://localhost:4000/logout", {
            credentials: "include",
            method: "POST",
        });

        setUserInfo(null);
    };

    const username = userInfo?.username;
    return (
        <header>
            <Link to="/" className="logo">
                MyLogo
            </Link>
            <nav>
                {username && (
                    <>
                        <Link>{username}</Link>
                        <Link to="/create">Create new post</Link>
                        <Link onClick={logout}>Logout</Link>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
};
