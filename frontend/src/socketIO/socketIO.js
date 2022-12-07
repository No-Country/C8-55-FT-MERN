import { io } from "socket.io-client";
import { generateNotification, types } from "../utils/notificationsUtils";

export const socket = io(`${import.meta.env.VITE_REACT_APP_API_URI}`);

export const onSocketIO = (socket, name, handleClickVariant, typeNotification) => {

    socket.on(name, (data) => {
        //localStorage.setItem("socket", JSON.stringify(data))
        //handleClickVariant(generateNotification(data.senderName, name), typeNotification)()
    })
}

export const emitSocketIO = (socket, name, data) => {
    socket.emit(name, { data })
}