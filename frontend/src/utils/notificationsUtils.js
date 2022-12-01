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
                console.log("DEFAULT")
                return `Sin notificaciones.`;
            break;
    }
}