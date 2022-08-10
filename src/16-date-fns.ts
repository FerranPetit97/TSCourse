import { subDays, format } from 'date-fns';

const date = new Date(1998, 2, 28);
const rta = subDays(date, 30);
const str = format(rta, 'yyy/MM/dd');

console.log(str);
