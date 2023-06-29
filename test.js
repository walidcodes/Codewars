// function getWeather(callback) {
//   setTimeout(() => callback("Sunny"));
// }

// getWeather(displayIcon);

// function displayIcon(data) {
//   if (data === "Sunny") render("SUN");
// }

// const fetchPromise1 = fetch(
//   "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );
// const fetchPromise2 = fetch(
//   "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );
// const fetchPromise3 = fetch(
//   "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );

// const fetchPromises = promise.all([
//   fetchPromise1,
//   fetchPromise2,
//   fetchPromise3,
// ]);

// fetchPromises
//   .then((responses) => {
//     for (const response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//     }
//   })
//   .catch((err) => console.error(err));

// anki practice getters and setters

// class Refinery {
//   constructor(greetings, goodbyes) {
//     this._greetings = greetings;
//     this._goodbyes = goodbyes;
//   }
//   activate() {
//     console.log(
//       `when entering I said:${this._greetings} and when I left, I made sure to say: ${this._goodbyes}`
//     );
//   }

// get greetings() {
//   return this._greetings;
// }

// set greetings(value) {
//   if (typeof value === "string") this._greetings = value;
// }
// }

// function Demo(greetings, goodbyes) {
//   let _greetings = greetings;
//   Object.defineProperty(this, "activate", {
//     get: function () {
//       return `when entering I said:${_greetings}`;
//     },
//   });
// }

const ones = document.querySelectorAll("h1");

Array.from(ones).forEach((h) => h.addEventListener("click", runs));

function runs(click) {
  if (click.target.innerHTML === "CodeWars") click.target.style.color = "red";
}
