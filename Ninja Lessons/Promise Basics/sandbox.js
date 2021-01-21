
const getTodos = (resource) => {

    return new Promise((resolve, reject)=>{

        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data);
        
            } else if (request.readyState === 4 || request.status === 404) {
                reject('error getting resource')
            }
            });
            
             
            request.open('GET', resource);
            request.send();
    });

    
};

getTodos('todos1.json').then(data => {
console.log('promise resolved:', data);
return getTodos('todos2.json');
}).then(data => {
    console.log('promise 2 resolved', data);
}).catch(err => {
    console.log('error:', err);
    });




 // const getSomething = () => {

//    return new Promise((resolve, reject) => {
//    // resolve('some data');
//        reject('error');
//    });
// }; 



// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });


//     const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     if(request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText);
//         callback(undefined, data );

//     } else if (request.readyState === 4 || request.status === 404) {
//         callback('could not fetch data', undefined);
//     }
//     });
    
    
//     request.open('GET', resource);
//     request.send();

// getSomething().then((data)=>{
//     console.log(data);
// }, (err)=> {
//     console.log(err);
// });