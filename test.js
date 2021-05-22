// Returns a string of ASCII values.
String.prototype.asciiString = function()
{
        let asciiValuesString = '';
            for (let i=0; i<this.length; i++)
            {
             asciiValuesString += this.charCodeAt(i);
            }
        console.log("Outputting string " + asciiValuesString);
        return asciiValuesString;
}

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
    }
}
function assert(condition)
{
    if (!condition) {
        throw new Error('Assertion false: ' + console.trace());
    }
}
function asciiStringTest()
{
    let string = "ab";
    assert(string.asciiString() == "9798");
}
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
asciiStringTest();
sortIntegers();
sortStrings();