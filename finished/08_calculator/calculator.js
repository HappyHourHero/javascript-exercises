let reducer = function(total, current) {
  return total + current
}

let multiplier = function(total, current) {
  return total * current
}

const add = function(a,b) {
  return a + b
};

const subtract = function(a,b) {
	return a-b
};



const sum = function(array) {
  if (array.length < 1) {
    return 0
  }
  else return array.reduce(reducer)
};


const multiply = function(array) {
  if (array.length < 1) {
    return 0
  }
  else return array.reduce(multiplier)
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(number) {
  if (number > 0) {
    for (let i = number - 1; i > 0; i--) {
      number = number * i;
      console.log(number)
  
    }
    return number
  }
	return 1
};


module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
