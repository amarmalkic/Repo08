var sum = 0;
function addThree() {
    sum += 3;
    console.log(sum);
}
addThree();
function addFive() {
    sum += 5;
    console.log(sum);
}
addFive();
module.exports = {
    addThree,
    addFive
};