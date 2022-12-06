import React from 'react'

import NotificationsCard from '../../layout/Client/components/header/NotificationsCard'
import { useSelector } from "react-redux";

const NotificationsMobile = () => {

    const { notificationsList } = useSelector(state => state.notification);
    
    return (
        <div style={{ height: "100vh", overflow: "scroll", marginTop: "65px" }}>
            {notificationsList && notificationsList.length > 0
                ?
                notificationsList.map((notification, id) => (
                    <NotificationsCard 
                        key={id} 
                        notification={notification}
                    />
                ))
                :
                <p>Sin Notificaciones</p>
            }
        </div>
    )
}

export default NotificationsMobile