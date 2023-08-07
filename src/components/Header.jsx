import React, { useState } from "react";
import notification from '../assets/images/bell.png';
import NotificationPage from "./NotificationPage";

const Header = () => {
    const [showNotificationPage, setShowNotificationPage] = useState(false);

    const handleClick = () => {
        setShowNotificationPage(!showNotificationPage);
    };

    return(
        <div className="notification-icon">
        <img style={{width:"20px",height: "20px", marginLeft:"300px"}} src={notification} alt=""  onClick={handleClick}/>
        {showNotificationPage && <NotificationPage/>}
        </div>
    );
};

export default Header;
