const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  /*Notice aligned 'then' blocks.
  Makes asynchronus call to response.json(), since it's an arrow function,
  it will always return. response.json() gives us a product, which then goes
  into the next then block. This is easier to read than nested "then"s or 
  callback hell. Gives us clean, sequential information about how calls
  are being handled.
  */
  fetchPromise
    .then((response) => response.json())
    .then((products) => {
        products.forEach(product => {
            console.log(product.name);
          });
    });

    //This executes first
    console.log('Chaining promises ... ');
  