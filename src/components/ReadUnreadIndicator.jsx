import React from "react";

const ReadUnreadIndicator= ({read}) =>{
    if(read){
        return <span className="read-indicator"></span>
    }else{
        return <span className="unread-indicator">*</span>
    }

};

export default ReadUnreadIndicator;
