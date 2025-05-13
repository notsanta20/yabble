import Cookies from "js-cookie";

function logout() {
  Cookies.remove("token");
}

export default logout;
