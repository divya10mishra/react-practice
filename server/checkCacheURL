import fetch from "./fetch.js";

/*
Task 2:
Add a cache to your fetch client.
It should not call `fetch` if the url has already been requested in the past, instead returning the data directly from the cache.

*/

// { 'example.com': { data }, 'example1.com': { data } }
const fetchClient = async (url) => {
  checkCache(url);
  const res = await fetch(url);
  const result = await res.json();
  return { data: result };
};

const cache = new Map();
async function checkCache(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }
  const newUrl = await fetch(url);
  cache.set(newUrl);

  return newUrl;
}

// Do not edit anything below this line
const test = async () => {
  const { data } = await fetchClient("example.com");
  console.log(data);
  const { data: data1 } = await fetchClient("example.com");
  console.log(data1);
};
test();
