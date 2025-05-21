import { format } from "date-fns";

function getMessageTime(time: string) {
  const date = format(new Date(time), "hh:mm aaa");
  return date;
}

export default getMessageTime;
