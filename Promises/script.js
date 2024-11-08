// let a = 10;
// let b = 20;

// let result = a + b;

// console.log(result);

// const getData = async () => {
//     let resultData = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     let data = await resultData.json()
//     console.log(data);

// }

// getData();

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);

    }).catch((error) => {
        console.log(error);
        
    })