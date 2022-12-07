import { get, patch } from './apiUtils';
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
            return <p><strong>{senderName}</strong> ha comentado tu publicación.</p>;

        case type === types.like:
            return <p>A <strong>{senderName}</strong> le gusta tu publicación.</p>;

        case type === types.likeComment:
            return <p>A <strong>{senderName}</strong> le gusta tu comentario.</p>;

        case type === types.responseComment:
            return <p><strong>{senderName}</strong> ha respondido tu comentario.</p>;

        case type === types.sharePost:
            return <p><strong>{senderName}</strong> ha compartido tu publicación.</p>;

        case type === types.followYouResponse:
            return <p><strong>{senderName}</strong> ahora te sigue.</p>;

        case type === types.followResponse:
            return <p>Sigues a <strong>{senderName}</strong>.</p>;

        default:
            return null;
    }
}

export async function fetchNotifications(dispatch) {

    let url = "/user/getnotifications";

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

export const patchNotification = async (id) => {

    try {
        const url = "/user/updatenotifications"
        let response = await patch(url, { read: true, _id: id })

        return response;

    } catch (error) {
        return { title: "An error occurred. Try again.", error }
    }

}