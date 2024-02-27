const fetchPromise = fetch(
    "https://mdn.github.io/learningarea/javascript/apis/fetching-data/can-store/products.json",
  );
  
  /*
  Now have two "then"s and a catch. Say the URL is bad (it is). If it fails,
  "then" blocks will not be executed. Instead, only the "catch" block will
  be executed. For each promise, you must have then blocks and catch blocks.
  Unless you want to just throw the runtime error, but both are valuable.
  Everything in "then" and "catch" is asynchronous.
  */

  fetchPromise
    .then((response) => {
        if(response.ok) {
            return response.json();
        }
        throw new Error(`Bad Response : ${response.status}`) 
    })
    .then((products) => {
        products.forEach(product => {
            console.log(product.name);
          });
        })
    .catch((error) => {
        console.error(`Failed to get products: ${error}`);
    });

    console.log('Chaining promises ... ');
  