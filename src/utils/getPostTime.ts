import { formatDistance } from "date-fns";

function getPostTime(time: string) {
  const date = formatDistance(new Date(time), new Date());
  return date;
}

export default getPostTime;
