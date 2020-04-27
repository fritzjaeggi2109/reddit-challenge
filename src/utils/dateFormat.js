import { formatDistance, fromUnixTime } from "date-fns";

export const formatDate = (timestamp) => {
  return formatDistance(new Date(), fromUnixTime(timestamp), {
    addSuffix: false,
  });
};
