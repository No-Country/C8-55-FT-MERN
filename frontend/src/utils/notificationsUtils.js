export const generateNotification = (senderName, type) => {
    switch (type) {
        case type === "comment":
            return `${senderName} ha comentado tu publicación`;
        case type === "like":
            return `A ${senderName} le gusta tu publicación`;
        case type === "likeComment":
            return `A ${senderName} le gusta tu commentario`;
        case type === "responseComment":
            return `${senderName} ha respondido tu commentario`;
        case type === "sharePost":
            return `${senderName} ha compartido tu publicación.`;
        case type === "followYouRequest":
            return `${senderName} quiere seguirte.`;
        case type === "followYouResponse":
            return `${senderName} ahora te sigue.`;
        case type === "followResponse":
            return `Sigues a ${senderName}.`;
    
        default:
            break;
    }
}