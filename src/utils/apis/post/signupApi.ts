import axios from "axios";
import { header } from "../../apiHeaders";
import type { SignFormData } from "../../../types/types";

const urlL: string = "http://localhost:3000";

async function signupApi(formData: SignFormData) {
  const data = await axios.post(`${urlL}/signup`, formData, header);

  return data;
}

export default signupApi;
