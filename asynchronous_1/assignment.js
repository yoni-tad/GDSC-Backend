async function fetcher() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let final = await response.json();
    console.log(final);
  } catch (error) {
    console.log("Error fetching");
  }
}
// fetcher();

function fetcher1() {
    return new Promise((resolve, reject) => {
        let promise = fetch('https://jsonplaceholder.typicode.com/todos/1');
        promise.then(response => {
            if (response.ok) {
                return response.json();
            }
        }) 
        .then(data => {
            resolve(data);
            console.log(data);
        })
        .catch(error => {
            reject(error);
        })
    });
}
fetcher1();