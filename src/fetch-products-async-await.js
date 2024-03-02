//This entire function runs asynchronusly
//Defining a function with async makes it return a promise
async function fetchProducts() {
    console.log('Begin fetch ... ');
        // after this line, our function will wait for the `fetch()` call to be settled
        // the `fetch()` call will either return a Response or throw an error
    const response = await fetch(
        //await fetch returns a promise. doesn't return immediately,
        //only returns after request is compelete
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    //This all only get executed after fetch completes
    console.log('Fetch done');
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    //This cannot complete until first fetch completes
    const data = await response.json();
    console.log('response created');
    //We are returning a promsise with this value in the resolve
    return data[0].name;
  }
  
  async function main() {
    console.log('Begin main ... ')
    try {
        const productName = await fetchProducts();
        console.log(productName);
    }
    catch(err) {
        console.log(`Failure: ${err.message}`);
    }
  }
  main();
  console.log('End main thread');
  