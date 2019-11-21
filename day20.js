// Use the value below whenever you need the value of Pi

const PI = 3.14159 

const sphereVolume = function (radius) {
  return (4/3) * PI * Math.pow(radius, 3);
}

const coneVolume = function (radius, height) {
  return (1/3) * PI * Math.pow(radius, 2) * height;
}

const prismVolume = function (height, width, depth) {
  return width * height * depth;
}

const totalVolume = function (solids) {
  return solids.reduce((acc, shape) => {
    switch(shape.type) {
      
      case "sphere": {
        return acc + sphereVolume(shape.radius);
      }
      
      case "cone": {
        return acc + coneVolume(shape.radius, shape.height);
      }
      
      case "prism": {
        return acc + prismVolume(shape.height, shape.width, shape.depth);
      }
    }
  }, 0);
}
