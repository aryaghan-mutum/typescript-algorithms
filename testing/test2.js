function calculateLength(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}
var v = { x: 3, y: 4, name: 'Zee' };
console.log(calculateLength(v)); // OK, result is 5
