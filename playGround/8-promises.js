const doWorkPromise = new Promise((resolve, reject) => {
   setTimeout(() => {
    // resolve(7, 4, 3);
    reject('Things went wrong!');
    resolve(7, 4, 3);
   }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success', result)
}).catch((error) => {
    console.log('Error', error)
})