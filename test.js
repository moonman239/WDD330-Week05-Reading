Array.prototype.properSort = function(func = (x,y) => (x >= y ? 1: -1))
{
    var sorted = this.sort(func);
    console.log(sorted);
    return sorted;
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
    for (var i=0; i < integers.length; i++)
    {
        assert(integers[i] === integersSorted[i]);
    }
}
function sortStrings()
{
    var strings = ['1','5','3','2','1000','4'];
    const stringsSorted = ['1','2','3','4','5','1000'];
    strings = strings.properSort();
    for (var i=0; i < strings.length; i++)
    {
        assert(strings[i] === stringsSorted[i]);
    }
}
sortIntegers();
sortStrings();