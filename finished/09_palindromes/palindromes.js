const palindromes = function (str) {

  let newArray = []
  str = str.toLowerCase()
  str = str.replace(/\W/g, '');  
  
  let splitted = str.split('')

  for (let i = splitted.length -1; i >= 0; i--) {
    if (splitted[i] !== '!' && splitted[i] !== ',' && splitted[i] !== '.' &&  splitted[i] !== ' ') {
      newArray.push(splitted[i])
    }
  }
  // console.log('string: ', str, 'array: ', newArray)

  return newArray.join('') == str
};

module.exports = palindromes;
