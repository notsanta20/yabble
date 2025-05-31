import Cookies from "js-cookie";
import socket from "../../app/socket";

function logout() {
  Cookies.remove("token");
  socket.disconnect();
}

export default logout;
