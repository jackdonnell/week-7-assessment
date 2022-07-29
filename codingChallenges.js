const sumToZero = arr => {
    let x = false
    for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++){
        if (arr[i] + arr[j] === 0) {
          x = true
        }
      }
    }
    return x
}

console.log(sumToZero([1, 4, 11, 2, 37, -4]))

//runtime is O(n^2) space is O(1)

const hasUniqueCharacters = word => {
    let x = false
    let arr = word.split('')
    const check = new Set(arr);
    if (arr.length === check.size) {
     x = true
    }
  return x
}

console.log(hasUniqueCharacters('woord'))

//runtime is O(n) space is O(1)

const isPangram = str => {
    const letters = str.toLowerCase().match(/[a-z]/g);
    const alphabet = [...new Set(letters)]
    return alphabet.length === 26;
}

console.log(isPangram('a quick brown fox jumps over the lazy dog'))

// runtime is O(n) space is O(n)

const find_longest_word = arr => {
 let x = []
    for (let i = 0; i < arr.length; i++) {
        x.push(arr[i].split('').length)
    }
 x.sort(function(a, b){return b-a})
 return x[0]
}

console.log(find_longest_word(["hi", "hello"]))

//the time complexity is O(n log n) for the sort function and O(n^2) for the for loop with the .split method so together that makes O(n^2 log n)??i think?? the space complexity is O(n).