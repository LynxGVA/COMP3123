const myPromise = new Promise((resolve, reject) => {
    resolve('Promise resolved succesfully!');
})

myPromise.then((message) => {
    console.log(message)
})