function negativesPerRow(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        if (arr.length > rowIdx) {
            setTimeout(() => {
                arr[rowIdx].filter((e) => {
                    return e < 0;
                }).length > 0 ? resolve(`Found Evidence : ${arr[rowIdx]}`) : reject('Not Found')
            }, 0);
        }
        else {
            reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`);
        }
    });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

negativesPerRowPromises = [];

for (let x = 0; x < array2D.length; x++) {
    negativesPerRowPromises.push(negativesPerRow(array2D, x));
}

Promise.any(negativesPerRowPromises)
    .then((results) => {
        console.log(results);
    })
    .catch((error) => console.log(`Error: ${error}`));