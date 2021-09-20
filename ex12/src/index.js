//
function randomInteger() {
    return Math.floor(Math.random() * 30);
}
randomInteger();
console.log(randomInteger());
//
module.exports = randomInteger;