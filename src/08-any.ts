(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = true;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';

  myDynamicVar = 'Hola';
  let rta = (myDynamicVar as String).toLowerCase();
  console.log(rta);

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
