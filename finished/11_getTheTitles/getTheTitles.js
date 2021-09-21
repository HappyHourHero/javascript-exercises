const getTheTitles = function(obj) {

    let array = []
    
    for (let book of obj) {
      array.push(book.title)
    }
    return array
  };

module.exports = getTheTitles;
