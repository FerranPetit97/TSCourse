(() => {
  const prices = [1, 2, 2, 1, 1, 212, 'hola', true];
  // prices.push('afdasf');
  // prices.push(false);
  // prices.push({});
  prices.push(3131231);

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | object)[] = ['hola', true];
  mixed.push(12);
  mixed.push(true);
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1, 2, 2, 1, 1, 212];
  numbers.map((item) => item * 2);
})();
