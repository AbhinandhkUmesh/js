const p = new Promise((resolve,reject) =>{
    resolve("Promise Resolved Value")
})

async function handlePromise(){
    await p;
}

// function getData(){
//     p.then((res) => console.log (res));
// }


