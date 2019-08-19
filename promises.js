// Callback
const getDataCallback = callback => {
  setTimeout(() => {
    callback(undefined, "This is the data");
  }, 2000);
};

getDataCallback((err, data) => {
  if (err) {
  } else {
    console.log(data);
  }
});

// Promise
//resolve and reject are two arguements we can use, which is similar to the callback if there is an error or if data exists
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is the promise data");
  }, 2000);
});

myPromise.then(data => {
  console.log(data);
});
