import React, { useState , useEffect } from 'react';
import moment from 'moment'; 
import NotificationList from './NotificationList';
import NotificationCounter from './NotificationCounter';
import MarkAllAsRead from './MarkAllAsRead';
import avatar1 from '../assets/images/avatar-angela-gray.webp';
import avatar2 from '../assets/images/avatar-mark-webber.webp';
import avatar3 from '../assets/images/avatar-jacob-thompson.webp';
import comment from '../assets/images/image-chess.webp';
import avatar5 from '../assets/images/avatar-kimberly-smith.webp';
import avatar6 from '../assets/images/avatar-rizky-hasanuddin.webp';
import avatar7 from '../assets/images/avatar-nathan-peterson.webp';
import avatar8 from '../assets/images/avatar-anna-kim.webp';




const NotificationPage = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, avatar: avatar2 ,name: 'Mark Weber', content: 'Your order has been confirmed', read: false },
        // { id: 2, avatar: avatar1,name: 'Angela Gray', content: 'followed you', read: false },
        // { id: 3, avatar: avatar3,name: 'Jackob Thompson', content: 'has joined your group',title: 'Chess Group', read: true },
        // { id: 4, avatar: avatar6,name: 'Rizky Hasanuddin', content: 'sent you private message', message: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it" ,  read: false },
        // { id: 5, avatar: avatar5,name: 'Kimberly Smith', content: 'commented on your picture',picture: comment, read: false,time: new Date() },
        // { id: 6, avatar: avatar7,name: 'Nathan Peterson', content: 'reacted to your recent post',title: '5 end game strategies' , read: false },
        // { id: 6, avatar: avatar8,name: 'Anna Kim', content: 'left the group',title: 'Chess Club' , read: false },



    ]);
    const addNotification = (content) => {
        const newNotification = {
          id: notificatsions.length + 1,
          avatar: avatar8, // adjust this as necessary
          name: 'Pizza App',
          content: content,
          read: false
        };
        setNotifications(prevNotifications => [...prevNotifications, newNotification]);
      };
    
    const timeElapsed = (date) => {
        return moment(date).fromNow(); // This will return a string like "5 minutes ago", "2 hours ago", etc.
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setNotifications(notifications => [...notifications]);
        }, 60000); // Update the component every minute to refresh the time ago string
        return () => clearInterval(interval);
    }, []);

    const markAllAsRead = () => {
        const updatedNotifications = notifications.map(notification => {
            return { ...notification, read: true };
        });
        setNotifications(updatedNotifications);
    };

    return (
        <main className="notification-page main">
            <div className="notification-page">
                <div className="notification-head">
                    <h1>Notifications</h1>
                    <div>
                        <NotificationCounter count={notifications.filter(notification => !notification.read).length} />
                    </div>
                    <MarkAllAsRead markAllAsRead={markAllAsRead} />
                </div>
                <NotificationList notifications={notifications} />
            </div>
        </main>
    );
};

export default NotificationPage;
