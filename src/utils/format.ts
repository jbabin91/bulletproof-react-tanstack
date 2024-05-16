import { default as dayjs } from 'dayjs';

export function formatDate(date: number) {
  return dayjs(date).format('MMMM D, YYYY h:mm A');
}
