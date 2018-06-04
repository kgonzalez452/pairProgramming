// Challenge 4
// The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.

var nums = [4, 1, 3];
var add = function(a, b) { return a + b; }

reduce(nums, add, 0);   //-> 8

// Here's how it works. The function has an "accumulator value" which starts as the initialValue and accumulates the output of each loop. The array is iterated over, passing the accumulator and the next array element as arguments to the callback. The callback's return value becomes the new accumulator value. The next loop executes with this new accumulator value. In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) to make it 5. Finally add(5, 3) brings it to 8, which is returned. 

// Challenge 5
// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!


// let inputArr = [1,2,3];
// let newArr = [4, 5, 6];

// function intersection (inputArr, newArr) {
//     for (let i = 0; i < inputArr.length; i++){
//         return newArr.push(inputArr[i]);
//     }
// }

// console.log(inputArr);
// console.log(newArr);

// let inputArr = [1,2,3];
// let newArr = [4, 5, 6];

function intersection (inputArr, newArr) {
    function reduce(nums , add, int){
    
        for(var i = 0; i < nums.length; i++){
            add(i,int);
            int++;
            return add(nums);
        };
        
    };
    for (let i = 0; i < inputArr.length; i++){
        return newArr.push(nums[i]);
    }
    return reduce();
};
// console.log(inputArr);
// console.log(newArr);
console.log(reduce(inputArr));



// Challenge 6
// Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. 
// BONUS: Use reduce!

var arr = [
    [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    [[10, 11, 12], [13, 14, 15], [16, 17, 18]],
    [[19, 20, 21], [22, 23, 24], [26, 27, 28]]
];

function union(arr) {
    var results = [];
    for(var i = 0; i < arr.length; i++){
        console.log('i ',arr[i]);
        if(arr[i].length){
           return  union(arr[i]);
        }else{
           results.push(arr[i]);
           return results
           console.log('results', results);
        };
    }
};

console.log(union(arr));

// Challenge 7
// Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

let arr1 = [1,2,3,4,5];

let arr2 = [9,8,7,6,0];

function objOfMatches (arr1, arr2, callback) {
    arr1.forEach(function callback(arr1){
    // console.log(arr1[i]);
    const elem = 
});
        for (let i = 0; i < arr1.length; i++){
        i == arr1++;
    }
    if (true){
        //make elem a key of of an obj
    } else {
        //dont make elem a key
    }
}


// Challenge 8
// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

function multiMap(arrVal, arrCall)