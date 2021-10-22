function trackRobot(...args) {
  if (args.length < 1) return [0, 0];

  let x = 0;
  let y = 0;
  let direction = "N";

  for (arg of args) {
    switch (direction) {
      case "N":
        y += arg;
        direction = "E";
        break;
      case "E":
        x += arg;
        direction = "S";
        break;
      case "S":
        y -= arg;
        direction = "W";
        break;
      case "W":
        x -= arg;
        direction = "N";
        break;
    }
  }

  return [x, y];
}

console.log(trackRobot());
console.log(trackRobot(20, 30, 10, 40));
console.log(trackRobot(-10, 20, 10));
