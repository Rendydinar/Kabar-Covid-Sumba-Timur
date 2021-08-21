import { parseISO } from 'date-fns';
import { getDateFormat } from '../lib/date';

export default function Date({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{getDateFormat(date)}</time>;
}
