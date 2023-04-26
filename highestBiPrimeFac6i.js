// Instructions:

// The numbers 6, 12, 18, 24, 36, 48 have a common property.
// They have the same two prime factors that are 2 and 3.

// If we see their prime factorization we will see it more clearly:

// 6 = 2 * 3
// 12 = 2^2 * 3
// 18 = 2 * 3^2
// 24 = 2^3 * 3
// 36 = 2^2 * 3^2
// 48 = 2^4 * 3
// 48 is the maximum of them bellow the value 50

// We may see another cases,
// for numbers that have another two prime factors like: 5, 11, but bellow (or equal) a maximum value 1000

// 55 = 5 * 11
// 275 = 5^2 * 11
// 605 = 5 * 11^2
// In this case 605 is the highest possible number bellow 1000.

// Make the function highest_biPrimefac(), that receives two primes as arguments and a maximum limit ,
// nMax(found numbers should be less or equal to nMax). Output should be a list or array of highest number found and the corresponding exponents of primes in order given. Representing the features for this function:

// highest_biPrimefac(p1, p2, nMax) -------> [max.number, k1, k2]

// max.number = p1^k1 * p2^k2 <= nMax

// p1 < p2 and k1 >= 1, k2 >= 1
// Let's see the cases we have above:

// highest_biPrimefac(2, 3, 50) ------> [48, 4, 1]

// highest_biPrime(5, 11, 1000) ------> [605, 1, 2]
// Enjoy it and happy coding!

// Solution attempt:

function highestBiPrimeFac(p1, p2, n) {
  //   find highest p1 factor possible
  let p1Max = 1;
  while (p1 ** p1Max * p2 < n) {
    p1Max++;
  }
  //   find highest nMax possible from p1^1 to p1^max and package results and factors in objects
  const favP1arr = [];
  for (let i = 1; i <= p1Max; i++) {
    for (let j = 1; j <= i; j++) {
      if (p1 ** i * p2 ** j < n)
        favP1arr.push({ i: i, j: j, r: p1 ** i * p2 ** j });
      else break;
    }
  }
  //   find highest p2 factor possible
  let p2Max = 1;
  while (p1 * p2 ** p2Max < n) {
    p2Max++;
  }
  //   find highest nMax possible from p2^1 to p2^max and package results and factors in objects
  const favP2arr = [];
  for (let i = 1; i <= p2Max; i++) {
    for (let j = 1; j <= i; j++) {
      if (p1 ** j * p2 ** i < n)
        favP2arr.push({ i: i, j: j, r: p1 ** j * p2 ** i });
      else break;
    }
  }
  //   finding the object with highest result
  const favP1 = favP1arr.sort((a, b) => b.r - a.r)[0];
  const favP2 = favP2arr.sort((a, b) => b.r - a.r)[0];
  //   returning result and its associated factors
  if (favP1.r >= favP2.r) return [favP1.r, favP1.i, favP1.j];
  else return [favP2.r, favP2.j, favP2.i];
}
