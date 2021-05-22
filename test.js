Array.prototype.properSort = function(func = (x,y) => (x >= y ? 1: -1))
{
    // Sort numbers in ascending order.
    if (this.every(x => !isNaN(x)))
    {
        console.log("Sorting numbers.");
        return this.sort(func);
    }
    else
    {
        console.log("Sorting strings.");
        return this;
    }
}
function assert(condition)
{
    if (!condition) {
        throw new Error('Assertion false: ' + console.trace());
    }
}

const assertModule = require("./assert");
function sortIntegers()
{
    var integers = [1,4,2,5,3,1000];
    const integersSorted = [1,2,3,4,5,1000];
    integers = integers.properSort();
    assert(integers.length > 0);
    for (var i=0; i < integers.length; i++)
    {
        assert(integers[i] === integersSorted[i]);
    }
}
function sortStrings()
{
    var strings = ['ad','fa','be','ba','cb','be'];
    const stringsSorted = ['ad','ba','be','be','cb','fa'];
    strings = strings.properSort();
    assert(strings.length > 0);
    for (var i=0; i < strings.length; i++)
    {
        assert(strings[i] === stringsSorted[i]);
    }
}
sortIntegers();
sortStrings();