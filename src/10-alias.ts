(() => {
  type UserID = string | number | boolean;
  let userId: UserID;

  function greeting(userId: UserID) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }
})();
