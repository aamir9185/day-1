function asyncOperation() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Simulating success
        if (success) {
          resolve('Operation succeeded!');
        } else {
          reject('Operation failed!');
        }
      }, 2000);
    });
  }
  
  // Using the promise
  asyncOperation()
    .then((resolve) => {
      console.log(resolve); // Operation succeeded!
    })
    .catch((reject) => {
      console.error(reject); // Operation failed!
    });
  