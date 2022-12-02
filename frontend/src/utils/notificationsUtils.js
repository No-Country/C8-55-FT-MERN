import { get } from './apiUtils';
import { setNotifications } from '../store/slices/notification.slice';

export const generateNotification = (senderName, type) => {

    switch (type != undefined) {
        case type === "Comment":
            return `${senderName} ha comentado tu publicación`;

        case type === "LIKE":
            return `A ${senderName} le gusta tu publicación`;

        case type === "LIKE_COMMENT":
            return `A ${senderName} le gusta tu commentario`;

        case type === "RESPONSE_COMMENT":
            return `${senderName} ha respondido tu commentario`;

        case type === "SHARE_POST":
            return `${senderName} ha compartido tu publicación.`;

        case type === "FOLLOW_YOU_RESPONSE":
            return `${senderName} ahora te sigue.`;

        case type === "FOLLOW_RESPONSE":
            return `Sigues a ${senderName}.`;

        default:
            return null;
    }
}

export async function fetchNotifications(dispatch) {

    let url = "http://localhost:3000/user/getnotifications";

    try {
        const response = await get(url)
        console.log("RESPONSE ", response)
        if (response.status === 200) {
            dispatch(setNotifications({
                notificationsList: response.data
            }))
        }
    } catch (error) {
        return { title: "An error occurred. Try again.", error }
    }

}