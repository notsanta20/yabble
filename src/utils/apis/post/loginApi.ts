import axios from "axios";
import { header } from "../../apiHeaders";
import type { LoginFormData } from "../../../types/types";

const urlL: string = "http://localhost:3000";

async function loginApi(formData: LoginFormData) {
  const data = await axios.post(`${urlL}/login`, formData, header);

  return data;
}

export default loginApi;
