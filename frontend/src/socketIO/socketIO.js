import { io } from "socket.io-client";

export const socket = io("http://localhost:3000");

export const onSocketIO = (socket, name) => {
    socket.on(name, (data) => {
        console.log("Esta es una prueba", data)
    })
}

export const emitSocketIO = (socket, name, data) => {
    socket.emit(name, {data})
}