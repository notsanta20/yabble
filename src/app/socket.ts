import { io } from "socket.io-client";

const socket = io("https://yabble-api.onrender.com", { autoConnect: false });

export default socket;
