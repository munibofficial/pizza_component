import React from "react";

const MarkAllAsRead = ({markAllAsRead}) => {
    const handleOnClick = () => {
        markAllAsRead();
    }
    return(
        <button className="mark-read-button" onClick={handleOnClick}>Mark All as read</button>
    );
};

export default MarkAllAsRead;