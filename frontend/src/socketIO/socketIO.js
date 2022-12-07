import { io } from "socket.io-client";
import { generateNotification, types } from "../utils/notificationsUtils";

export const socket = io(`${import.meta.env.VITE_REACT_APP_API_URI}`);

export const typesSocket = {
    newMessage: "NEW_MESSAGE",
    getMessage: "GET_MESSAGE"
}

export const emitSocketIO = (socket, name, data) => {
    socket.emit(name, { data })
}