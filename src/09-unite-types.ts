(() => {
  let userId: string | number;
  userId = 134123;
  userId = 'gasdfa';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`string ${myText.toFixed(1)}`);
    }
  }

  greeting('SASSASAS');
  greeting(1.3123);
})();
