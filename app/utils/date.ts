// date-fns
// date-fns
import {formatDistanceToNow, parse} from 'date-fns';

export const formatToHumanReadable = (timestamp: string): string => {
  const utcDate = parse(timestamp, "yyyy-MM-dd'T'HH:mm:ssxxxx", new Date());
  return formatDistanceToNow(utcDate);
};
