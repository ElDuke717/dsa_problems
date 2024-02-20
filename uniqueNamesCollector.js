/**
 *Objective:
Create a JavaScript function named uniqueNamesCollector that takes an array of names (which may include duplicates) as input and returns an array of unique names sorted alphabetically. Additionally, the function should ignore case differences when determining if names are unique, but the output should preserve the original casing of the first occurrence of each name.

Requirements:
Input: An array of strings (e.g., ["John", "Anna", "john", "Anna", "Mike"]).
Processing:
Remove duplicate names, ignoring case differences (e.g., "John" and "john" are considered duplicates).
Preserve the casing of the first occurrence of each name.
Output: An array of unique names sorted alphabetically without altering the original casing of the names (e.g., ["Anna", "John", "Mike"]).

 */

// declare uniqueNamesCollector, takes one arg, an array
function uniqueNamesCollector(array) {
  // create a cache to hold names
  const names = {};
  // iterate over the names array,
  for (let i = 0; i < array.length; i++) {
    // if the name to lower case is present, then do not add it
    // if the name to lower case is not present, add to the cache
    if (!names[array[i].toLowerCase()]) {
      // preserve the name casing by using the original name as the value.
      names[array[i].toLowerCase()] = array[i];
    }
  }
  // return the cache keys as and array
  return Object.values(names).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase()),
  );
}

console.log(uniqueNamesCollector(['John', 'Anna', 'john', 'Anna', 'Mike']));
// Should output: ["Anna", "John", "Mike"]
