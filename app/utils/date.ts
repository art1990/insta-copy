// date-fns
// date-fns
import { formatDistanceToNow, parse } from 'date-fns';

export const formatToHumanReadable = (timestamp: string): string => {
  const utcDate = parse(timestamp, "yyyy-MM-dd'T'HH:mm:ssxxxx", new Date());
  return formatDistanceToNow(utcDate);
};

const addNull = (time: number) => {
  const zero = +time === 0 || time < 10 ? '0' : '';
  return zero + time;
};

export const formatToTimer = (sec: number): string => {
  const seconds = Math.floor(sec % 60);
  const minutes = Math.floor((sec / 60) % 60);
  return `${addNull(minutes)}:${addNull(seconds)}`;
};
