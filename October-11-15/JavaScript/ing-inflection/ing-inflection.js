function ingExtractor(input) {
  var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  let words = input.replace(regex, "");
  words = words.split(" ");

  return words.filter((word) => {
    return word.includes("ing") && word.length > 4;
  });
}

console.log(ingExtractor("going Ping, king sHrink dOing"));
console.log(ingExtractor("coming bringing Letting sing"));
console.log(ingExtractor("zing went ring, ding wing SINk"));
