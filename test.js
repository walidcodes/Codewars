function getWeather(callback) {
  setTimeout(() => callback("Sunny"));
}

getWeather(displayIcon);

function displayIcon(data) {
  if (data === "Sunny") render("SUN");
}

const fetchPromise1 = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise2 = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const fetchPromise3 = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

const fetchPromises = promise.all([
  fetchPromise1,
  fetchPromise2,
  fetchPromise3,
]);

fetchPromises
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((err) => console.error(err));
