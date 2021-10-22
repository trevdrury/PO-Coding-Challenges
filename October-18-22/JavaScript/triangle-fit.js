function doesTriangleFit(tri1, tri2) {
  // Check if triangles are valid
  if (
    tri1[0] + tri1[1] <= tri1[2] ||
    tri1[0] + tri1[2] <= tri1[1] ||
    tri1[1] + tri1[2] <= tri1[0]
  )
    return false;
  if (
    tri2[0] + tri2[1] <= tri2[2] ||
    tri2[0] + tri2[2] <= tri2[1] ||
    tri2[1] + tri2[2] <= tri2[0]
  )
    return false;

  // Use Heron's formula to calculate area of triangles
  // Calculate semi-perimeter for each triangle
  let s1 = (tri1[0] + tri1[1] + tri1[2]) / 2;
  let s2 = (tri2[0] + tri2[1] + tri2[2]) / 2;

  // Calculate the area of each triangle
  let a1 = Math.sqrt(s1 * ((s1 - tri1[0]) * (s1 - tri1[1]) * (s1 - tri1[2])));
  let a2 = Math.sqrt(s2 * ((s2 - tri2[0]) * (s2 - tri2[1]) * (s2 - tri2[2])));

  return a1 <= a2;
}

console.log(doesTriangleFit([1, 1, 1], [1, 1, 1]));
console.log(doesTriangleFit([1, 1, 1], [2, 2, 2]));
console.log(doesTriangleFit([1, 2, 3], [1, 2, 2]));
console.log(doesTriangleFit([1, 2, 4], [1, 2, 6]));
