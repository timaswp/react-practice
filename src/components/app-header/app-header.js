import React from "react";

const AppHeader = ({likedPosts, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Teymur Melikov</h1>
            <h2>{allPosts} posts, {likedPosts} liked</h2>
        </div>
    )
};

export default AppHeader;