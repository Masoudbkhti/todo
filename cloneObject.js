const obj = {
  name: "test",
  age: 25,
  etc: {
    uk: "test",
    countries: [
      "test",
      "test",
      "test",
      {
        key: "alaki",
      },
    ],
  },
};

function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const clonedObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    clonedObj[key] = deepClone(obj[key]);
  }

  return clonedObj;
}

console.log(deepClone(obj));
