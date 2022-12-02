import { get } from './apiUtils';
import { setNotifications } from '../store/slices/notification.slice';

export const types = {
    newComment: "NEW_COMMENT",
    like: "LIKE",
    likeComment: "LIKE_COMMENT",
    responseComment: "RESPONSE_COMMENT",
    sharePost: "SHARE_POST",
    followYouResponse: "FOLLOW_YOU_RESPONSE",
    followResponse: "FOLLOW_RESPONSE"
}

export const generateNotification = (senderName, type) => {

    switch (type != undefined) {
        case type === types.newComment:
            return `${senderName} ha comentado tu publicación`;

        case type === types.like:
            return `A ${senderName} le gusta tu publicación`;

        case type === types.likeComment:
            return `A ${senderName} le gusta tu commentario`;

        case type === types.responseComment:
            return `${senderName} ha respondido tu commentario`;

        case type === types.sharePost:
            return `${senderName} ha compartido tu publicación.`;

        case type === types.followYouResponse:
            return `${senderName} ahora te sigue.`;

        case type === types.followResponse:
            return `Sigues a ${senderName}.`;

        default:
            return null;
    }
}

export async function fetchNotifications(dispatch) {

    let url = "http://localhost:3000/user/getnotifications";

    try {
        const response = await get(url)
        
        if (response.status === 200) {
            dispatch(setNotifications({
                notificationsList: response.data
            }))
        }
    } catch (error) {
        return { title: "An error occurred. Try again.", error }
    }

}