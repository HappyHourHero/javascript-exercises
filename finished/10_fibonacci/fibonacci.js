const fibonacci = function(number) {

    if (number < 0) {
        return 'OOPS'
    }

    let array = [1];
    let i = 1
    while (array.length <= number) {
      array.push(i)
      i += array[array.length -2]
      console.log(i)
    }
    console.log(array)
    return array[number - 1]
  };

module.exports = fibonacci;
