import _ from 'lodash';

const data = [
  {
    username: 'Ferran',
    role: 'admin',
  },
  {
    username: 'Jessica',
    role: 'seller',
  },
  {
    username: 'Pau',
    role: 'seller',
  },
  {
    username: 'Rosana',
    role: 'customer',
  },
];

const rta = _.groupBy(data, (item) => item.role);

console.log(rta);
