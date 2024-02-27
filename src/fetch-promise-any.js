const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  );
  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  );
  
  Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((response) => {
      //First promise to resolve, throws this block. Could be any of the 3 URLs,
      //not necessarily fetchPromise1.
        console.log(`${response.url}: ${response.status}`);
    })
    //This only throws if ALL promises get rejected.
    //As long as at least one promise resolves, this does not execute.
    .catch((error) => {
        console.error(`Failed to fetch: ${error}`);
    });
  