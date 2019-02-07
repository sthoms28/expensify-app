const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('This is my resolved data');
       //Can only access resolve/reject 1 time -  resolve('This is my other resolved data');
      // reject('Something went wrong!');
    }, 1500)
   
});

console.log('before');

promise.then((data) => {
    console.log('1',data);

    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve({
                name: 'Shane',
                age: 43
            });
        }, 5000);
        });
    }).then((str) => {
        console.log('does this run', str);
    }).catch((error) => {
    console.log('error: ', error);
});

console.log('after');