import axios from "axios";

export async function GetAPIData(url: string) {
  return await axios(url);
}
