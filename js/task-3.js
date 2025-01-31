function filterArray(numbers, value) {
  // Створюємо новий масив, що містить лише числа більші за value
  const filteredArray = [];
  
  for (let number of numbers) {
    if (number > value) {
      filteredArray.push(number);
    }
  }
  
  return filteredArray;
}

// Для перевірки результату
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
