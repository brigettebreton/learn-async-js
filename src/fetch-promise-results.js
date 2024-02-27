const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

//Before we had callback hell, now we have a then within a then
//which can very easily evolve into something like callback hell
fetchPromise.then((response) => {
  const jsonPromise = response.json();
  //jsonPromise.forEach will not work
  jsonPromise.then((products) => {
    products.forEach(product => {
      console.log(product.name);
    });
  });
});

//This gets executed first
console.log('Fetching products ... ');
