import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import format from "date-fns/format";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export const PostPage = () => {
    const { id } = useParams();
    const [postInfo, setPostInfo] = useState(null);
    const { userInfo } = useContext(UserContext);
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`).then((response) => {
            response.json().then((postInfo) => {
                setPostInfo(postInfo);
            });
        });
    }, [id]);
    // console.log(postInfo);

    if (!postInfo) return "";

    return (
        <div className="post-page">
            <h1>{postInfo.title}</h1>
            <time className="time">
                {format(new Date(postInfo.createdAt), "MMM d, yyyy HH:mm ")}
            </time>
            <p className="post-author"> By @{postInfo.author.username}</p>
            {userInfo.id === postInfo.author._id && (
                <div className="edit-row">
                    <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
                        Edit this post
                    </Link>
                </div>
            )}

            <div className="post-image">
                <img src={"http://localhost:4000/" + postInfo.cover} alt="" />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postInfo.content }}></div>
        </div>
    );
};
