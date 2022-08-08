(() => {
  let productTitle = 'My Amazing product';
  //productTitle = null;
  productTitle = 'My Amazing product change';
  console.log('productTitle', productTitle);

  const productDescription = "I'm the best";
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;

  const summary = `
  Pues
  no
  va
  y
  puedo
  hacerlo
  así
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew; ${isNew}
  `;

  console.log('summary', summary);
})();
